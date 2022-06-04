// import axios from "axios"
import Link from "next/link"
import { useData } from "../context/GetData"

function MyPage(){

    const {userData, setUserData} = useData();
    console.log("[mp]",userData)

    return (
        <div>
            <div
            className=" bg-apple bg-apple-200 h-screen w-screen "
            >
        <div
         className="flex justify-between text-apple-500 items-center max-w-screen h-20 bg-apple-50 align-middle drop-shadow-lg"
            ><h2 className="ml-12  font-mono ">My Page</h2>
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
            <div
            className=" flex flex-column "
            >
              <div
              className="flex flex-row container mg-auto my-10 h-64"
              >
                  <div
                  className=" bg-gray-400 bg-opacity-50 p-10 font-mono mx-8 rounded-md outline outline-white w-1/4 min-w-fit  min-h-fit"
                  >
                      <div className="flex flex-column font-mono ">
                          <div className="leading-10"
                          > User Name:<br />
                          user name here
                          {/* {userData.userName} */}
                          </div>
                          
                          <Link href="/addPlant">
                              <button
                              className=" text-white mt-12 h-10 bg-teal-600 outline outline-1 rounded-md outline-white hover:text-white hover:bg-teal-400">
                                  Add new Plant
                              </button>
                          </Link>
                      </div>
                  </div>

                  <div
                      className="flex flex-row font-mono bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white w-1/2 min-w-fit  min-h-fit"
                  >
                      <div 
                      className="bg-cactus scale-100 bg-center bg-cover w-4/12 h-40 text-center rounded-xl shadow-lg shadow-apple-300 border-white border-4 "
                      ></div>
                      <div
                      className="ml-6"
                      >
                          <div className="text-red-600">
                              Plant Name:
                              {/* {userData.plantName[0]} */}
                          </div>
                          <div>
                              Plant Type:
                              {/* {userData.plantType} */}
                          </div>
                          <div>
                              {/* Plant ID: {userData.plantId[0]} */}
                          </div>
                          <div>
                              Plant Plofile
                              <div className="ml-5 max-h-20 text-sm">
                                  <div>average temperature: 30</div>
                                  <div>average humidity: 50</div>
                                  <div>average soilLevel: 250</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

            <div className=" flex flex-column justify-evenly  container mg-auto my-10 h-64">
              <div
                  className="ml-10 bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white w-9/12"
              >next plant2 
              </div>
              <div
                  className="ml-10 bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white w-9/12"
              >next plant3
              </div>
            </div>
          </div>
         </div>
        </div>
    )
}

export default MyPage
