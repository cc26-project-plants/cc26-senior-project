import React, { useState } from "react";
import { useMqtt } from "../../context/MqttContext";
import { useData } from "../../context/GetData";

const ControlPanel = () => {
  const {
    messages,
    setMessages,
    lightToggle,
    setLightToggle,
    messages2,
    setMessages2,
    setPlantID,
    waterToggle,
    setWaterToggle,
  } = useMqtt();

  const { userData, setUserData } = useData();

  return (
    <div className="font-mono  w-full  bg-roppongi-200 shadow-gray-400 shadow-lg">
      <div className="flex flex-col mt-14 mb-10">
        <div className="md:w-8/12 md:ml-52 bg-roppongi-100 shadow-lg flex flex-row justify-center gap-10 shadow-gray-600 rounded-lg p-3">
          <h2 className=" text-2xl text-roppongi-900 select-none">Light</h2>
          <input
            type="checkbox"
            className="toggle toggle-lg toggle-accent"
            onChange={() => {
              if (!lightToggle) {
                setMessages("1");
                setPlantID(userData.currentPlantId);
                setLightToggle(true);
              } else {
                setMessages("0");
                setLightToggle(false);
              }
            }}
          />
        </div>

        <div className="md:w-8/12 md:ml-52 mt-14 bg-roppongi-100 shadow-lg flex flex-row justify-center gap-10 shadow-gray-600 rounded-lg p-3">
          <h2 className=" text-2xl text-roppongi-900 select-none">Water </h2>
          <input
            type="checkbox"
            className="toggle toggle-lg toggle-accent"
            onChange={() => {
              if (!waterToggle) {
                setMessages2("1");
                setWaterToggle(true);
              } else {
                setMessages2("0");
                setWaterToggle(false);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
