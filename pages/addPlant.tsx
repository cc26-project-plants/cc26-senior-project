import React, { useState } from "react";
import { useRouter } from "next/router";
import { Card, Form } from "react-bootstrap";
import axios from "axios";

import { useData } from "../context/GetData";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import MobileNavbar from "./components/MobileNavbar";

interface plantInput {
  plantName: string;
  plantType: string;
  plantID: string;
  email: string;
}

const AddPlant = () => {
  const router = useRouter();

  const { newPlantData, setNewPlantData, setUserData } = useData();

  const [routesMain, setRoutesMain] = useState({
    btnText: "My Page",
    route: "/myPage",
  });
  const [plantData, setPlantData] = useState<plantInput>({
    plantName: "",
    plantType: "",
    plantID: "",
    email: "",
  });

  const handleAddPlant = async (e: any) => {
    e.preventDefault();

    const newPlant = await createNewPlant();
    const checkAddPlant = await sendNewPlant(newPlant);

    if (checkAddPlant.success) {
      setUserData({
        ...checkAddPlant.data,
        currentPlantId: checkAddPlant.data.plantId,
      });
      setNewPlantData({
        newPlantId: checkAddPlant.data.plantId.at(-1),
        newPlantName: checkAddPlant.data.plantName.at(-1),
      });
      router.push("/newPlant");
    }
  };

  const createNewPlant = async () => {
    const newPlant: {
      email: string;
      plantId: string;
      plantName: string;
      plantType: string;
    } = {
      email: plantData.email,
      plantId: plantData.plantID,
      plantName: plantData.plantName,
      plantType: plantData.plantType,
    };
    return newPlant;
  };

  const sendNewPlant = async (newPlant: any) => {
    const response = await axios.post(
      `https://happa-26-backend.an.r.appspot.com/plants/${plantData.email}`,
      newPlant
    );
    return response.data;
  };

  return (
    <div>
      <div className="font-thin placeholder-gray-200 overflow-hidden">
        <div className="md:hidden">
          <MobileNavbar routesMain={routesMain} />
        </div>
        <TopBar routesMain={routesMain} />
        <div className="flex flex-row h-full">
          <SideBar />

          <Card className="text-white">
            <Card.Body className="bg-roppongi-500 bg-opacity-60 h-screen w-screen flex items-center">
              <div className="w-1/3 min-w-fit min-h-min max-h-screen -mt-20 md:-mt-20 flex justify-center items-center">
                <Form
                  onSubmit={handleAddPlant}
                  className=" bg-roppongi-50 bg-opacity-100 text-roppongi-800 max-h-screen p-3 object-contain rounded-md outline outline-white"
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="font-semibold">
                      Plant Name
                    </Form.Label>
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
                    <Form.Label className="font-semibold">
                      Plant Type
                    </Form.Label>
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
                      <option value="A">Cactus??????????????????</option>
                      <option value="B">Sword Leaf????????????????????????</option>
                      <option value="C">Benjamin????????????????????????</option>
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
                    type="submit"
                    className="w-1/2 text-xl text-white font-light min-w-1/2 w-100 bg-roppongi-550 outline outline-1 h-16 rounded-md outline-white mt-6 hover:text-white hover:bg-roppongi-700"
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
