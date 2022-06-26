import { SyntheticEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import axios from "axios";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/firebase";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/GetData";

const Login = () => {
  const router = useRouter();

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  const { currentUser, login } = useAuth();
  const { setUserData } = useData();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const ERROR_MESSAGE =
    "Email not found or the password did not match the email.";

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    login(data.email, data.password)
      .then(async () => {
        await setUserAndMove();
      })
      .catch(() => {
        setErrorMessage(ERROR_MESSAGE);
      });
  };

  const signInWithGoogle = async (e: any) => {
    e.preventDefault();
    await signInWithPopup(auth, provider);
    if (!currentUser || !currentUser.email) {
      setErrorMessage(ERROR_MESSAGE);
      return;
    }

    await setUserAndMove();
  };

  const emailToUser = async () => {
    const userData = await getUserData();
    setUserData(userData);
  };

  const getUserData = async () => {
    const response = await axios.get(
      `https://happa-26-backend.an.r.appspot.com/users/${currentUser.email}`
    );
    const userData = response.data.data;
    return userData;
  };

  const setUserAndMove = async () => {
    await emailToUser();
    setLoading(false);
    router.push("/welcome");
  };

  return (
    <div>
      <div className="bg-loginBg  h-screen w-screen flex flex-row md:items-center md:justify-start items-center  justify-center ">
        <div className=" md:w-1/6  "></div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white   md:shrink-0 md:w-1/3 "
        >
          <h2 className="text-center text-white font-thin">
            Welcome to Happa!
          </h2>

          <h2 className="text-center text-white font-thin">Log In</h2>

          <label className="block text-white text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="email"
            autoComplete="off"
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            required
            value={data.email}
            placeholder="Enter email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          {errorMessage && (
            <h2 className="text-md text-yellow-300">{ERROR_MESSAGE}</h2>
          )}

          <label className="block text-white text-sm font-bold mb-2 mt-4">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <div className="flex justify-center flex-col">
            <button
              className="w-1/2 text-white min-w-1/2 justify-center bg-teal-600 outline outline-1 h-16 rounded-md outline-white mt-6 hover:text-white hover:bg-teal-400"
              type="submit"
            >
              Log In
            </button>

            <button
              disabled={loading}
              className="w-1/2 text-white min-w-1/2 justify-center bg-teal-600 outline outline-1 h-16 rounded-md outline-white mt-6 hover:text-white hover:bg-teal-400"
              onClick={signInWithGoogle}
            >
              Log In With Google
            </button>
          </div>

          <div>
            <p className="text-white mt-10 mb-3">
              If you haven&apos;t signed up, sign up now!
            </p>
            <Link href="/signup">
              <button className="left-5 w-1/2 text-white min-w-1/2 justify-center bg-teal-700 outline outline-1 h-16 rounded-md outline-white hover:text-white hover:bg-teal-500">
                Signup
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
