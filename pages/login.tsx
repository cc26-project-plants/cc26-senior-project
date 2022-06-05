import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Form, Button, Card } from "react-bootstrap";

import { auth } from "../config/firebase";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const router = useRouter();

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const { currentUser, login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await login(data?.email, data?.password);
    // router.push("/welcome");

    console.log("currentUser", currentUser);

    setLoading(false);
  };

  const signInWithGoogle = async (e: any) => {
    e.preventDefault();

    await signInWithPopup(auth, provider);
    // router.push("/welcome");
  }

  return (
    <div>
      <div className=" bg-loginBg  h-screen w-screen flex  flex-row items-center">
        <div className=" w-1/6 "></div>
        <form
          onSubmit={signInWithGoogle}
          className={
            " bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white w-1/3 min-w-fit  min-h-fit"
          }
        >
          <h2 className="text-center text-white font-thin ">
            Welcome to Happa!
          </h2>
          <h2 className="text-center text-white font-thin ">Log In</h2>
          <Form.Group id="email">
            <Form.Label className="text-white">Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              required
              value={data.email}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              required
              placeholder="Password"
            />
          </Form.Group>
          <div className=" flex justify-center flex-col">
            <button
              disabled={loading}
              className="w-1/2 text-white min-w-1/2 justify-center bg-teal-600 outline outline-1 h-16 rounded-md outline-white mt-6 hover:text-white hover:bg-teal-400 "
              type="submit"
              onClick={handleSubmit}
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
            <p className="text-white mt-10">
              If you haven&apos;t signed up, sign up now!
            </p>
            <Link href="/signup">
              <button className="left-5 w-1/2 text-white min-w-1/2 justify-center bg-teal-700 outline outline-1 h-12 rounded-md outline-white hover:text-white hover:bg-teal-500">
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
