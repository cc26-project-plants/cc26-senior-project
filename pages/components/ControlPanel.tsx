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
  } = useMqtt();

  const { userData, setUserData } = useData();
  const [lightRange, setLightRange] = useState<number>(0);
  const [value, setValue] = useState(0);

  const [waterToggle, setWaterToggle] = useState<boolean>(false);

  function handleRange(e) {
    setValue(e.target.value);
  }
  return (
    <div className="font-mono  w-full  bg-roppongi-200 shadow-gray-400 shadow-lg">
      <div className="flex flex-col  mt-14 mb-10">
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
