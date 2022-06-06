import React from "react";
import { useData } from "../../context/GetData";

const NewPlantBody = () => {
  const { newPlantData, setNewPlantData } = useData();
    // console.log("newPlantData",newPlantData)

  return (
    <div
      className="w-screen h-screen  justify-center shadow-lg  bg-apple-200">
      <div className="flex flex-column container mg-auto my-10 h-64">
        <div className="flex flex-row font-mono bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white w-1/2 min-w-fit  min-h-fit">
          <div
            className="bg-aloe scale-100 bg-center bg-cover w-4/12 h-40 text-centerrounded-xl 
            shadow-lg shadow-apple-300 border-white border-4"/>
          <div className="ml-6">
            <div className="text-red-600">
             <div>New Plant ID : {newPlantData.newPlantId}</div>
             <div
             className="mt-10"
             >New Plant Name : {newPlantData.newPlantName}</div>
            </div>
          </div>
       </div>

       <div 
       className="font-mono mt-10 ml-5"
       >You could add new plant successfully! </div>
      </div>
    </div>
  );
};

export default NewPlantBody;