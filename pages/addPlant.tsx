import React, { useState } from "react";
import { useRouter } from "next/router";
import { Card, Form } from "react-bootstrap";
import axios from "axios";
import Link from "next/link";
import { useData } from "../context/GetData";
import MyPageTopBar from "./components/MyPageTopBar";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

const AddPlant = () => {
  const router = useRouter();
  const { newPlantData, setNewPlantData } = useData();

  interface plantInput{
    plantName: string,
    plantType: string,
    plantID: string,
    email: string
  }
  const [plantData, setPlantData] = useState <plantInput>({
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

    if(checkAddPlant.success){
      // console.log("[success]",checkAddPlant.success)
      // console.log("[data]",checkAddPlant.data)
      setNewPlantData({
        newPlantId: checkAddPlant.data.plantId.at(-1),
        newPlantName: checkAddPlant.data.plantName.at(-1),
      })
      router.push("/newPlant");
    }
  };


  const createNewPlant = async () => {
    const newPlant : { email: string, plantId: string, plantName: string, plantType: string
    }= {
      email: plantData.email,
      plantId: plantData.plantID,
      plantName: plantData.plantName,
      plantType: plantData.plantType,
    };
    console.log("[createNP]newPlant", newPlant);
    return newPlant;
  };

  const sendNewPlant = async (newPlant: any) => {
    const response = await axios.post(
      `https://happa-26-backend.an.r.appspot.com/plants/${plantData.email}`,
      newPlant
    );
    return response.data
  };

  return (
    <div>
      <div className="text-white font-thin placeholder-gray-200">
      <TopBar />
      <div className="flex flex-row h-full">
        <SideBar />
        
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
                    autoComplete="off"
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
                    <option value="A">
                      Cactus（サボテン）
                    </option>
                    <option value="B">
                      Sword Leaf（ソードリーフ）
                    </option>
                    <option value="C">
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
                    autoComplete="off"
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
                    autoComplete="off"
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
    </div>
  );
};

export default AddPlant;
