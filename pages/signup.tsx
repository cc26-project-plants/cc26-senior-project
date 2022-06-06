import React, { useState } from "react";
import { useRouter } from "next/router";
import { Card, Form } from "react-bootstrap";
import axios from "axios";

import { useAuth } from "../context/AuthContext";
import { useData } from "../context/GetData";

const Signup = () => {
  const router = useRouter();

  const { signup } = useAuth();

  const { setUserData } = useData();
  const [data, setData] = useState({
    userName: "",
    plantName: "",
    plantType: "",
    plantID: "",
    email: "",
    _password: "",
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();

    await signup(data.email, data._password);
    const newUser = createUser();
    const newUserData = await sendNewUser(newUser);
    setUserData(newUserData);
    router.push("/welcome");
  };

  const createUser = () => {
    const newUser = {
      userName: data.userName,
      email: data.email,
      plantId: data.plantID,
      plantName: data.plantName,
      plantType: data.plantType,
    };
    return newUser;
  };

  const sendNewUser = async (newUser) => {
    const response = await axios.post(
      "https://happa-26-backend.an.r.appspot.com/users/",
      newUser
    );
    const newUserData = response.data.data;
    return newUserData;
  };

  return (
    <div className="bg-loginBg h-screen w-screen flex ">
      <div className="w-1/6"></div>
      <div className="bg-gray-400 bg-opacity-50 flex pl-12 pr-12 pt-2 rounded-md mt-3 outline outline-white min-w-fit min-h-fit w-fit h-fit">
        <form onSubmit={handleSignup} className="text-white flex flex-col">
          <h2 className="text-center font-thin">Signup</h2>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="font-semibold">User Name</Form.Label>
            <Form.Control
              type="userName"
              placeholder="Your name"
              required
              onChange={(e: any) =>
                setData({
                  ...data,
                  userName: e.target.value,
                })
              }
              value={data.userName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font-semibold">Plant Name</Form.Label>
            <p>Please give your plant a nickname</p>
            <Form.Control
              placeholder="Plant name"
              required
              onChange={(e: any) =>
                setData({
                  ...data,
                  plantName: e.target.value,
                })
              }
              value={data.plantName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font-semibold">Plant Type</Form.Label>
            <Form.Select
              className="custom-select mr-sm-3"
              required
              onChange={(e: any) =>
                setData({
                  ...data,
                  plantType: e.target.value,
                })
              }
              value={data.plantType}
            >
              <option>Choose...</option>
              <option value="Cactus（サボテン）">Cactus（サボテン）</option>
              <option value="Sword Leaf（ソードリーフ">
                Sword Leaf（ソードリーフ）
              </option>
              <option value="Benjamin（ベンジャミン）">
                Benjamin（ベンジャミン）
              </option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font-semibold">Plant ID</Form.Label>
            <p>Please check the Plant ID enclosed with the device</p>
            <Form.Control
              type="text"
              placeholder="Plant ID"
              required
              onChange={(e: any) =>
                setData({
                  ...data,
                  plantID: e.target.value,
                })
              }
              value={data.plantID}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font-semibold">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="font-semibold">Password</Form.Label>
            <p className="mt-0">* more than 6 characters with 2 numbers</p>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e: any) =>
                setData({
                  ...data,
                  _password: e.target.value,
                })
              }
              value={data._password}
            />
          </Form.Group>
          <button
            // variant="primary"
            type="submit"
            className=" text-white min-w-1/2 w-100 bg-teal-600 outline outline-1 h-16 mb-9  rounded-md outline-white mt-2 hover:text-white hover:bg-teal-400"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
