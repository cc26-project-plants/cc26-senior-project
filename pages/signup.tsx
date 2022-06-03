import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { sendStatusCode } from "next/dist/server/api-utils";


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

  // const [sentData, setsentData] = useState({
  //   userName: data.userName,
  //   email: data.email,
  //   plantId: data.plantID,
  //   plantName: data.plantName,
  //   plantType: data.plantType
  // });

  const [returnData, setReturnData] = useState<any>({})

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
      await createUser()
      //console.log("returnData", returnData)
      // await getReturnData()
      router.push("/");
      // console.log("data",data)
    } catch (err) {
      console.log(err);
    }
  };

  const createUser = async ()=>{
    const sentData = {
      userName: data.userName,
      email: data.email,
      plantId: data.plantID,
      plantName: data.plantName,
      plantType: data.plantType
    }
    console.log("sentData", sentData)
    const response = await axios.post("https://happa-26-backend.an.r.appspot.com/users/", sentData);

    const returnGetData = response.data.data;
    console.log("returnGetData.data", returnGetData)
    setReturnData(returnGetData)
    // console.log("THISSSS",returnData)
    console.log("returnData", returnData)
  }

  // useEffect(()=>{
  //   createUser();
  // }, [])

  // const getReturnData = async () =>{
  //   try{
  //     const response = await axios.get(`https://happa-26-backend.an.r.appspot.com/users/${data.email}`);
  //     const returnGetData = response.data
  //     console.log(returnGetData)
  //     setRetunData(returnGetData)
  //   }catch(error){
  //     console.error("error")
  //   }
  // }

  return (
    <div>
      <div className="text-white font-thin"> 
        <Card >
          <Card.Body className="bg-loginBg h-screen w-screen ">
            <div className=" w-1/3 min-w-fit min-h-min max-h-screen">
            <Form 
              onSubmit={handleSignup}
              className=" bg-gray-400 max-h-screen bg-opacity-50 p-3 object-contain rounded-md outline outline-white"
            >

            <h2 className="text-center font-thin">Signup</h2>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
              className="font-semibold "
              >User Name</Form.Label>
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
              <Form.Label
              className="font-semibold"
              >Plant Name</Form.Label>
              <p>Please give your plant a nickname</p>
              <Form.Control
                //type="userName"
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
              <Form.Label
              className="font-semibold"
              >Plant Type</Form.Label>
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
                  <option value="B">Cactus（サボテン）</option>
                  <option value="B">Sword Leaf（ソードリーフ）</option>
                  <option value="B">Benjamin（ベンジャミン）</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                className="font-semibold"
                >Plant ID</Form.Label>
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
                <Form.Label
                className="font-semibold"
                >Email address</Form.Label>
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
                <Form.Label
                className="font-semibold"
                >Password</Form.Label>
                <p
                className="mt-0"
                >* more than 6 characters with 2 numbers</p>
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
              <button 
                // variant="primary" 
                type="submit" 
                className="w-1/2 text-white min-w-1/2 w-100 bg-teal-600 outline outline-1 h-16 rounded-md outline-white mt-6 hover:text-white hover:bg-teal-400"
                >
                Signup
              </button>
            </Form>
            </div>
          </Card.Body>
        </Card>
      </div>   
    </div>
  );
}

export default Signup;
