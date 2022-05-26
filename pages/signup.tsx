import type { NextPage } from "next";
import React from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";

const SignUp: NextPage = () => {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const passwordConfirmRef: any = useRef();

  return (
    <div>
      <h2>Join Project Plant!</h2>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
          </Form>
          <Button className="w-100" type="submit">
            Sign Up
          </Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Login
      </div>
    </div>
  );
};

export default SignUp;
