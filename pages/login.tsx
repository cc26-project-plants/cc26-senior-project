import type { NextPage } from "next";
import React from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";
import Link from "next/link";
import useAuth from "../src/hook/auth";
import { withPubic } from "../src/hook/route";

function Login<NextPage>({ auth }: { auth: any }) {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const { user, loginWithGoogle, error }: any = auth;

  return (
    <div
      style={{
        width: "50vh",
        margin: "auto",
      }}
    >
      <h2>Project Plant</h2>
      {error && <p>{error}</p>}
      <p>{user?.displayName}</p>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log in</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
          </Form>
          <Button className="w-100" type="submit" onClick={loginWithGoogle}>
            Log In
          </Button>
          <Button
            className="w-100"
            type="submit"
            onClick={() => {
              console.log("Click");
            }}
          >
            Log In 2
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default withPubic(Login); //This makes the index Just "Loading.."
