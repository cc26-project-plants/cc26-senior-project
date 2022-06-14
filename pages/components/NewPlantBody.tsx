import React from "react";
import { useData } from "../../context/GetData";

const NewPlantBody = () => {
  const { newPlantData, setNewPlantData } = useData();

  return (
    <div className="w-screen h-screen  justify-center shadow-lg  bg-roppongi-200">
      <div className="flex flex-column container mg-auto my-10 h-64">
        <div className="flex flex-row font-sans bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white w-1/2 min-w-fit  min-h-fit">
          <div
            className="bg-aloe
            scale-50 md:scale-100 bg-center bg-cover w-4/12 h-40 text-centerrounded-xl 
            shadow-lg shadow-apple-300 border-white border-4"
          />
          <div className="ml-6">
            <div>
              <div>New Plant ID : {newPlantData.newPlantId}</div>
              <div className="mt-10">
                New Plant Name : {newPlantData.newPlantName}
              </div>
            </div>
          </div>
        </div>

        <div className="font-sans mt-10 ml-5">
          <h2>New plant added successfully!</h2>
        </div>
      </div>
    </div>
  );
};

export default NewPlantBody;
