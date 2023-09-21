import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
 } from "firebase/auth";
import { createContext, useEffect, useState, useContext } from "react";
import { appFirebase } from "./firebase-app";

const firebaseAuth = getAuth(appFirebase);

const FirebaseAuthContext = createContext(null);

const FirebaseAuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);

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

const signInUser = ({ email, password }) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
 }

 const signUpUser = ({ email, password }) => {
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

