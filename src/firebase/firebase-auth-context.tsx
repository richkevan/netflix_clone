import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User
 } from "firebase/auth";
import { createContext, useEffect, useState, useContext } from "react";
import { appFirebase } from "./firebase-app";

const firebaseAuth = getAuth(appFirebase);

const FirebaseAuthContext = createContext<{
  user: User | null
  // tslint:disable-next-line: no-any
  signInUser: ({ email, password }:{email:string, password: string}) => Promise<unknown>
  signUpUser: ({ email, password }:{email:string, password: string}) => Promise<unknown>
  signOutUser: () => Promise<unknown>
}>({
  user: null,
  signInUser: () => Promise.resolve(),
  signUpUser: () => Promise.resolve(),
  signOutUser: () => Promise.resolve()
});

const FirebaseAuthProvider = ({ children }:ContainerProps) => {
 const [user, setUser] = useState<null | User>(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
  return () => unsubscribe();
}, []);

const signInUser = ({ email, password }:{email:string, password: string}) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
 }

 const signUpUser = ({ email, password }:{email:string, password: string}) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
 }

const signOutUser = () => {
  return signOut(firebaseAuth)
 }

 const useFirebaseAuth = {
  user,
  signInUser,
  signUpUser,
  signOutUser
}


return (
  <FirebaseAuthContext.Provider value={useFirebaseAuth}>
    {children}
  </FirebaseAuthContext.Provider>
)
};

const useFirebaseAuth = () => {
  const {user, signInUser, signUpUser, signOutUser} = useContext(FirebaseAuthContext);

  return {user, signInUser, signUpUser, signOutUser}
}

export { FirebaseAuthContext, FirebaseAuthProvider, useFirebaseAuth };

