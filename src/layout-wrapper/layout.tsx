import {ReactComponent as NetflixLogo} from '../assets/Netflix.svg';
import { useFirebaseAuth } from '../firebase/firebase-auth-context';

const Layout = ({ children }:ContainerProps) => {
  // replace user with firebase auth
  // const user = useAuth();
  const { user, signOutUser } = useFirebaseAuth();
  const navigate = (path: string) => window.location.pathname = path;
  console.log(children);
  return (
    <div>
      <header className="grid grid-cols-2 fixed top-0 w-full z-20 align-middle h-[90px]">
        <a href="/"   className=" h-11 w-auto ml-[3%] self-center">
          <NetflixLogo className=" h-11 w-auto"/>
        </a>
        <div className="flex justify-end mr-[3%] self-center">
          {!user && window.location.pathname.includes("signup") && <button className="bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => navigate("/login")}>Sign In</button>}
          {user && <button className="bg-red-600 text-white px-4 py-2 rounded-md" onClick={signOutUser}>Log out</button>}
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;