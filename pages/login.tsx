import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { auth } from "../config/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const router = useRouter();
  const { currentUser, login } = useAuth();
  const [error, setError] = useState("");
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
      setError("");
      setLoading(true);
      await login(data?.email, data?.password);
      console.log(currentUser);
      router.push("/");
    } catch (err) {
      setError("Failed to log in");
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
    <div
      style={{
        width: "40%",
        margin: "auto",
      }}
    >
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form onSubmit={(e: any) => signInWithGoogle(e)}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
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
              <Form.Label>Password</Form.Label>
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
            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              onClick={(e: any) => handleSubmit(e)}
            >
              Log In
            </Button>
          </Form>
          <Button
            disabled={loading}
            className="w-100"
            onClick={(e: any) => signInWithGoogle(e)}
          >
            Log In With Google
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
