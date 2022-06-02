import React, { useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";


function Signup() {
  const router = useRouter();
  const { signup } = useAuth();
  const [data, setData] = useState({
    userName: "",
    plantName: "",
    plantType: "",
    plantID: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
      router.push("/");
      createUser()
      // console.log("data",data)
    } catch (err) {
      console.log(err);
    }
  };

  const createUser = async ()=>{
    const newUser = {
      userName: data.userName,
      plantName: data.plantName,
      plantType: data.plantType,
      plantID: data.plantID,
    }
    // console.log("new user", newUser)
    await axios.post("/users", newUser)
  }

  return (
    <div
      className="text-white font-mono flex-row items-center"
      // className=" bg-loginBg  h-screen w-screen flex  flex-row items-center"
      // style={{
      //   width: "50%",
      //   margin: "auto",
      // }}
    >
      <Card className="bg-loginBg  h-screen w-screen">
        <Card.Body className="w-1/2">
          <h2 className="text-center my-3 ">Signup</h2>
          <p>Hello, Plant Owner!</p>
          <Form 
            onSubmit={handleSignup}
            className={
              " bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white w-1/3 min-w-fit  min-h-fit"
            }
          >

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
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
            <Form.Label>Plant Name</Form.Label>
            <p>Please give your plant a nickname</p>
            <p>(It is shown in main page)</p>
            <Form.Control
              // type="userName"
              placeholder="plant name"
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
            <Form.Label>Plant Type</Form.Label>
              <Form.Select
               className="custom-select mr-sm-3" 
               required
               onChange={(e: any) =>
                 setData({
                   ...data,
                   plantType: e.target.value,
                 })
               }
               value={data. plantType}
              >
                <option selected>Choose...</option>
                <option value="Cactus">Cactus（サボテン）</option>
                <option value="Sword Leaf">Sword Leaf（ソードリーフ）</option>
                <option value="Benjamin">Benjamin（ベンジャミン）</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Plant ID</Form.Label>
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
              <Form.Label>Email address</Form.Label>
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
              <Form.Label>Password</Form.Label>
              <p>more than 6 characters with 2 numbers</p>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(e: any) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
                value={data.password}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
