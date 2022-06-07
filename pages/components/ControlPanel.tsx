import React, { useState, useEffect } from "react";
import { useMqtt } from "../../context/MqttContext";

const ControlPanel = () => {
  const { messages, setMessages, lightToggle, setLightToggle } = useMqtt();
  const [lightRange, setLightRange] = useState(0);

  const [waterToggle, setWaterToggle] = useState(false);

  return (
    <div className="font-mono  w-full  bg-apple bg-apple-200 shadow-gray-400 shadow-lg">
      <div className="flex flex-col  mt-14 mb-10">
        <div className="w-8/12 ml-52 bg-apple-100 shadow-lg flex flex-row justify-center gap-10 shadow-gray-600 rounded-lg p-3">
          <h2 className=" text-2xl select-none">Light</h2>
          <input
            type="checkbox"
            className="toggle toggle-lg toggle-accent"
            onChange={() => {
              if (!lightToggle) {
                setMessages("1");
                setLightToggle(true);
              } else {
                setMessages("0");
                setLightToggle(false);
              }
            }}
          />
        </div>
        <div className="w-8/12 ml-52 mt-14 bg-apple-100 shadow-lg flex flex-row justify-center gap-10 shadow-gray-600 rounded-lg p-3">
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