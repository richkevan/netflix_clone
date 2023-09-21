import { useEffect } from "react";
import { useFirebaseAuth } from "../firebase/firebase-auth-context";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const { signInUser, user } = useFirebaseAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: { [key: string]: string } = {};
    for (const [key, value] of formData.entries()) {
      data[key] = typeof value === "string" ? value : "";
    }
    signInUser({ email: data.email, password: data.password })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

    useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, [user]);

   

    return (
      <div className="min-h-screen w-full bg-Login">
        <div className="h-screen container mx-auto grid place-items-center before:h-24 z-20 relative">
          <div className="w-[450px] h-[75vh] bg-black bg-opacity-80 mb-24 px-16 pt-16 pb-10 rounded-md flex flex-col">
            <div className=" flex-[2_2_55%]">
            <h1 className=" text-4xl font-bold">Sign In</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" name="email" placeholder="Email or phone number" className="w-full h-10 bg-gray-500 mt-4 mb-4 px-2 text-white placeholder:text-white rounded-md"/>
              <input type="password" name="password" placeholder="Password" className="w-full h-10 bg-gray-500 mt-4 mb-4 px-2 text-white placeholder:text-white rounded-md"/>
              <button className="w-full h-10 bg-red-600 mt-4 mb-4 px-2 text-white placeholder:text-white rounded-md" type="submit">Sign In</button>
              <div className="flex justify-between">
                <div>
                  <label htmlFor="remember" className="text-white">Remember me</label>
                  <input type="checkbox" name="remember" id="remember" className="ml-2"/>
                </div>
                <a href="#" className="text-white">Need help?</a>
              </div>
            </form>
            </div>
            
            <div className="flex flex-col flex-[1_1_45%]">
            <div>
                <p className="text-white mt-4">New to Netflix? <a href="/signup" className="text-red-600">Sign up now.</a></p>
            </div>
            <div>
              <p className="text-white text-sm">This page is protected by Google reCAPTCHA to ensure you're not a bot.<a>Learn more.</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
  export default Login;