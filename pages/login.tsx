import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../contexts/authContext";

const Login = () => {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
      }}
    >
      <h1 className="text-center my-3 ">Login To Project Plants</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="text"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
