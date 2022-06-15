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
    <div className="flex justify-center items-center font-sans w-full bg-roppongi-200 shadow-gray-300 shadow-lg inset-0">

      <div className="flex flex-col justify-around items-center md:flex-row place-content-center bg-roppongi-300 md:w-8/12  md:h-96 innset-0 shadow-buttoncolor-350 shadow-xl rounded border-white mt-8 md:-mt-16 mb-10">
        <div className="md:w-4/12 md:h-60 md:my-auto bg-roppongi-100 shadow-lg flex flex-column shadow-gray-600 rounded-lg p-6">
          <svg width="200pt" height="150pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <path transform="matrix(5.7143 0 0 5.7143 112.71 0)" d="m40.39 74.69 9.9395 2.3099s1.7603 0.62002 1.7603-1.5497v-0.19004c0-2.61 0.49014-3.7898 5.2097-8.8901h6.84e-4c5.8153-4.5438 9.1499-11.562 8.9995-18.94 0-8.8833-4.7394-17.092-12.433-21.533-7.6932-4.442-17.171-4.442-24.865 0-7.6932 4.4413-12.433 12.65-12.433 21.533-0.077247 7.363 3.243 14.35 9.0002 18.94 4.7202 5.1003 5.17 6.2802 5.2097 8.8901v1.2599c0 1.2899-0.28027 2.4302 1.1901 2.88l19.17 4.2198" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
            <path transform="matrix(5.7143 0 0 5.7143 112.71 0)" d="m31.95 85.78 18.95 4.2998" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
            <path transform="matrix(5.7143 0 0 5.7143 112.71 0)" d="m33.14 92.55 15.39 3.4501" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
            <path transform="matrix(5.7143 0 0 5.7143 112.71 0)" d="m41.53 2.0002v7.2598" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
            <path transform="matrix(5.7143 0 0 5.7143 112.71 0)" d="m18.71 8.1102 3.6299 6.2897" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
            <path transform="matrix(5.7143 0 0 5.7143 112.71 0)" d="m2.0003 24.82 6.2897 3.6299" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
            <path transform="matrix(5.7143 0 0 5.7143 112.71 0)" d="m74.77 28.45 6.2795-3.6299" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
            <path transform="matrix(5.7143 0 0 5.7143 112.71 0)" d="m60.72 14.4 3.6299-6.2897" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>            
          </svg>

          <div className="flex flex-row ml-12 gap-2">
          <h2 className=" text-3xl text-center text-roppongi-900 select-none">Light</h2>
          
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
        </div>

        <div className="md:w-4/12 md:h-60 md:my-auto backdrop: md:ml-52 bg-roppongi-100 shadow-lg flex flex-col justify-center shadow-gray-600 rounded-lg p-6">     
          <svg width="200pt" height="250pt" version="1.1" viewBox="0 0 650 650" xmlns="http://www.w3.org/2000/svg">
            <path d="m199.26 42.043c-3.4805 0.10547-6.793 1.5-9.3008 3.9141 0 0-18.977 18.34-38.039 42.137-19.062 23.801-39.922 51.598-39.922 80.582 0 48.781 39.312 88.84 87.691 88.84 48.387 0 87.691-40.059 87.691-88.84 0-28.984-20.855-56.781-39.922-80.582-19.062-23.797-38.039-42.137-38.039-42.137h0.007812c-2.7227-2.625-6.3906-4.0352-10.168-3.9141zm0.52734 34.008c6.8359 7.1914 16.246 17.488 25.922 29.566 17.785 22.199 33.777 50.73 33.777 63.078 0 33.883-26.68 60.844-59.699 60.844-33.016 0-59.695-26.961-59.695-60.844 0-12.348 15.988-40.879 33.773-63.078 9.6758-12.078 19.086-22.379 25.922-29.566zm217.72 24.32v-0.003906c-3.3945 0.14453-6.6211 1.5156-9.0781 3.8633 0 0-39.539 37.555-79.168 86.137-39.637 48.582-81.121 106.68-81.121 158.09 0 93.469 76.27 169.5 169.93 169.5 93.664 0 169.93-76.031 169.93-169.5 0-51.41-41.48-109.52-81.117-158.09-39.629-48.582-79.168-86.137-79.168-86.137-2.7383-2.6133-6.4219-4.0078-10.207-3.8633zm0.58203 33.625c13.719 13.707 40.289 41.16 67.125 74.047 38.332 46.988 74.816 105.93 74.816 140.4 0 78.297-63.363 141.5-141.94 141.5-78.57 0-141.93-63.207-141.93-141.5 0-34.465 36.48-93.41 74.816-140.4 26.828-32.891 53.406-60.34 67.117-74.047zm106.71 210.18 0.003906-0.003906c-6.1367-0.042969-11.586 3.9102-13.445 9.7539-14.246 42.699-48.441 76.43-91.527 90.125v0.003907c-3.5703 1.0977-6.5547 3.5742-8.2852 6.8867-1.7344 3.3086-2.0742 7.1758-0.94141 10.734 1.1328 3.5625 3.6406 6.5195 6.9688 8.2227 3.3281 1.6992 7.1953 2 10.746 0.83203 51.633-16.414 92.496-56.707 109.6-107.94 1.4922-4.2656 0.83203-8.9883-1.7695-12.68-2.6016-3.6953-6.8281-5.9062-11.344-5.9375z"/>
          </svg> 
          <div className="flex flex-row ml-12 gap-2">
            <h2 className="ml-4 text-3xl text-roppongi-900 select-none">Water </h2>
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
    </div>
  );
};

export default ControlPanel;
