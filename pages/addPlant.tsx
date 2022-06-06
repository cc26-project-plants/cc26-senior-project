import React, { useState } from "react";
import { useRouter } from "next/router";
import { Card, Form } from "react-bootstrap";
import axios from "axios";
import Link from "next/link";

// import { useAuth } from "../context/AuthContext";
// import { useData } from "../context/GetData";

const addPlant = () => {
  const router = useRouter();
  // const { userData, setUserData } = useData();

  const [plantData, setPlantData] = useState({
    plantName: "",
    plantType: "",
    plantID: "",
    email: "",
  });

  const handleAddPlant = async (e: any) => {
    e.preventDefault();

    const newPlant = await createNewPlant();
    const checkAddPlant = await sendNewPlant(newPlant);
    console.log("checkAddPlant", checkAddPlant)
    // setUserData(getReturnPlantData);
    // console.log("[handleAP]getReturnPlantData",getReturnPlantData)
    // if(checkAddPlant){
    //   router.push("/main");
    // }
    
  };

  const createNewPlant = async () => {
    const newPlant = {
      email: plantData.email,
      plantId: plantData.plantID,
      plantName: plantData.plantName,
      plantType: plantData.plantType,
    };
    console.log("[createNP]newPlant", newPlant);
    return newPlant;
  };

  const sendNewPlant = async (newPlant) => {
    const response = await axios.post(
      `https://happa-26-backend.an.r.appspot.com/plants/${plantData.email}`,
      newPlant
    );
    console.log("[res/sendNewPlant]", response.data.data)
    // const checkAddPlant = response.data.success;
    // console.log("[send plant]true or false",checkAddPlant)
    // console.log("[send plant]newPlant",newPlant)
    // return checkAddPlant;
  };

  return (
    <div>
      <div className="text-white font-thin placeholder-gray-200">
        <div className="flex justify-between text-apple-500 items-center max-w-screen h-20 bg-apple-50 align-middle drop-shadow-lg">
          <h2 className="ml-12  font-mono ">Add Plant</h2>
          <Link href="/main">
            <button
              className=" w-40 h-20 inline-block text-sm leading-none border rounded
                no-underline text-white border-teal-500 bg-apple-300 
                hover:border-transparent hover:text-white hover:bg-apple-400 
                shadow-gray-200 drop-shadow-md
                "
            >
              Back to Main
            </button>
          </Link>
        </div>
        <Card>
          <Card.Body className="bg-apple-200  h-screen w-screen ">
            <div className=" w-1/3 min-w-fit min-h-min max-h-screen">
              <Form
                onSubmit={handleAddPlant}
                className=" bg-gray-400 max-h-screen bg-opacity-50 p-3 object-contain rounded-md outline outline-white"
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-semibold">Plant Name</Form.Label>
                  <p>Please give your plant a nickname</p>
                  <Form.Control
                    placeholder="Plant name"
                    required
                    onChange={(e: any) =>
                      setPlantData({
                        ...plantData,
                        plantName: e.target.value,
                      })
                    }
                    value={plantData.plantName}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-semibold">Plant Type</Form.Label>
                  <Form.Select
                    className="custom-select mr-sm-3"
                    required
                    onChange={(e: any) =>
                      setPlantData({
                        ...plantData,
                        plantType: e.target.value,
                      })
                    }
                    value={plantData.plantType}
                  >
                    <option>Choose...</option>
                    <option value="Cactus（サボテン）">
                      Cactus（サボテン）
                    </option>
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
                      setPlantData({
                        ...plantData,
                        plantID: e.target.value,
                      })
                    }
                    value={plantData.plantID}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-semibold">
                    Email address
                  </Form.Label>
                  <p>*Please enter registered email address</p>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    onChange={(e: any) =>
                      setPlantData({
                        ...plantData,
                        email: e.target.value,
                      })
                    }
                    value={plantData.email}
                  />
                </Form.Group>

                <button
                  // variant="primary"
                  type="submit"
                  className="w-1/2 text-white min-w-1/2 w-100 bg-teal-600 outline outline-1 h-16 rounded-md outline-white mt-6 hover:text-white hover:bg-teal-400"
                >
                  Add New Plant
                </button>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default addPlant;
