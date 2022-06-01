import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { auth } from "../config/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const router = useRouter();
  const { currentUser, login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      await login(data?.email, data?.password);
      router.push("/main");
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  const signInWithGoogle = (e: any) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className=" bg-loginBg h-screen flex justify-start flex-col">
        <div className=" w-1/2 h-1/2  mt-16 ml-16 p-44">
          <form
            onSubmit={(e: any) => signInWithGoogle(e)}
            className={
              " bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white"
            }
          >
            <h2 className="text-center text-white font-thin ">
              Welcome to Happa!
            </h2>
            <h2 className="text-center text-white font-thin">Log In</h2>
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
                className="w-1/2 text-white justify-center bg-teal-600 outline outline-1 h-16 rounded-md outline-white mt-6 hover:text-white hover:bg-teal-400"
                type="submit"
                onClick={(e: any) => handleSubmit(e)}
              >
                Log In
              </button>
              <button
                disabled={loading}
                className="w-1/2 text-white justify-center bg-teal-600 outline outline-1 h-16 rounded-md outline-white mt-6 hover:text-white hover:bg-teal-400 flex flex-col"
                onClick={(e: any) => signInWithGoogle(e)}
              >
                Log In With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
