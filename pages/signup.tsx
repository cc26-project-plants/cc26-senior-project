import React, { useState } from "react";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import axios from "axios";

import { useAuth } from "../context/AuthContext";
import { useData } from "../context/GetData";

const Signup = () => {
  const router = useRouter();

  const { signup } = useAuth();

  const { setUserData } = useData();

  interface inputData {
    userName: string;
    plantName: string;
    plantType: string;
    plantID: string;
    email: string;
    _password: string;
  }

  const [data, setData] = useState<inputData>({
    userName: "",
    plantName: "",
    plantType: "",
    plantID: "",
    email: "",
    _password: "",
  });

  const handleSignup = async () => {
    await signup(data.email, data._password);
    const newUser = createUser();
    const newUserData = await sendNewUser(newUser);
    setUserData(newUserData);
    router.push("/welcome");
  };

  const createUser = () => {
    const newUser: {
      userName: string;
      email: string;
      plantId: string;
      plantName: string;
      plantType: string;
    } = {
      userName: data.userName,
      email: data.email,
      plantId: data.plantID,
      plantName: data.plantName,
      plantType: data.plantType,
    };
    return newUser;
  };

  const sendNewUser = async (newUser: any) => {
    const response = await axios.post(
      "https://happa-26-backend.an.r.appspot.com/users/",
      newUser
    );
    const newUserData = response.data.data;
    return newUserData;
  };

  return (
    <div>
      <div className="bg-loginBg h-screen w-screen flex items-center text-white">
        <div className="w-1/6"></div>
        <div className="bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white w-1/3 min-w-fit min-h-fit">
          <h2 className="text-start font-thin text-6xl">Signup</h2>
          <form onSubmit={handleSignup} className="grid grid-cols-2 gap-4">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="font-semibold mt-6">User Name</Form.Label>
              <Form.Control
                type="userName"
                placeholder="Your name"
                required
                autoComplete="off"
                onChange={(e: any) =>
                  setData({
                    ...data,
                    userName: e.target.value,
                  })
                }
                value={data.userName}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className=" mt-2">
              <Form.Label className="font-semibold -mb-2">
                Plant Name
              </Form.Label>
              <p>Please give your plant a nickname</p>
              <Form.Control
                placeholder="Plant name"
                required
                autoComplete="off"
                onChange={(e: any) =>
                  setData({
                    ...data,
                    plantName: e.target.value,
                  })
                }
                value={data.plantName}
              />
            </Form.Group>

            <Form.Group className="mt-2" controlId="formBasicEmail">
              <Form.Label className="font-semibold">Plant Type</Form.Label>
              <Form.Select
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
                <option value="A">Cactus（サボテン）</option>
                <option value="B">Sword Leaf（ソードリーフ）</option>
                <option value="C">Benjamin（ベンジャミン）</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="-mt-2">
              <Form.Label className="font-semibold -mb-2">Plant ID</Form.Label>
              <p>Please check the Plant ID enclosed with the device</p>
              <Form.Control
                type="text"
                placeholder="Plant ID"
                required
                autoComplete="off"
                onChange={(e: any) =>
                  setData({
                    ...data,
                    plantID: e.target.value,
                  })
                }
                value={data.plantID}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="font-semibold">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                autoComplete="off"
                onChange={(e: any) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                value={data.email}
              />
            </Form.Group>

            <Form.Group className="-mt-4" controlId="formBasicPassword">
              <Form.Label className="font-semibold -mb-1">Password</Form.Label>
              <p>* more than 6 characters with 2 numbers</p>
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
              type="submit"
              className=" text-white min-w-1/2 w-100 bg-teal-600 outline outline-1 h-16 mb-9  rounded-md outline-white mt-2 hover:text-white hover:bg-teal-400"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
