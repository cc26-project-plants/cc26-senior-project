import React, { useState, useEffect } from "react";
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
  } = useMqtt();

  const { userData, setUserData } = useData();
  const [lightRange, setLightRange] = useState<number>(0);
  const [value, setValue] = useState(0);

  const [waterToggle, setWaterToggle] = useState<boolean>(false);

  function handleRange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="font-mono  w-full  bg-apple bg-apple-200 shadow-gray-400 shadow-lg">
      <div className="flex flex-col  mt-14 mb-10">
        <div className="md:w-8/12 md:ml-52 bg-apple-100 shadow-lg flex flex-row justify-center gap-10 shadow-gray-600 rounded-lg p-3">
          <h2 className=" text-2xl select-none">Light</h2>
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

          <div>
            <input
              onChange={(e) => {
                handleRange(e);
              }}
              type="range"
              min="0"
              max="100"
              value={value}
              className="range range-accent"
              step="25"
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span className="select-none">|</span>
              <span className="select-none">|</span>
              <span className="select-none">|</span>
              <span className="select-none">|</span>
              <span className="select-none">|</span>
            </div>
          </div>
        </div>

        <div className="md:w-8/12 md:ml-52 mt-14 bg-apple-100 shadow-lg flex flex-row justify-center gap-10 shadow-gray-600 rounded-lg p-3">
          <h2 className=" text-2xl select-none">Water </h2>
          <input
            type="checkbox"
            className="toggle toggle-lg toggle-accent"
            onChange={() =>
              !waterToggle ? setWaterToggle(true) : setWaterToggle(false)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
