import React, { useContext, useState, useEffect, createContext } from "react";
import * as mqtt from "mqtt";

// let client: mqtt.MqttClient = mqtt.connect(
//   "wss://hairdresser.cloudmqtt.com:36484"
// );
// let client: mqtt.MqttClient = mqtt.connect("wss://192.168.10.79:8808");
// let client: mqtt.MqttClient = mqtt.connect("wss://happa-26-mqtt.an.r.appspot.com:8808");

const MqttContext = createContext<any>({});
var client = mqtt.connect(`wss://hairdresser.cloudmqtt.com:36484`, {
  username: `zabazjfs`,
  password: `YgpLm5xPCxBY`,
});

export function useMqtt() {
  return useContext(MqttContext);
}

export default function MqttProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [connectionStatus, setConnectionStatus] = useState<boolean>(false);
  const [messages, setMessages] = useState<string>("");
  const [messages2, setMessages2] = useState<string>("");
  const [plantID, setPlantID] = useState<string>("");
  const [lightToggle, setLightToggle] = useState<boolean>(false);
  //TODO
  const [lightStatus, setLightStatus] = useState<boolean>(false);
  let topic: string = `light/${plantID}/request`;

  useEffect(() => {
    client.on("connect", () => setConnectionStatus(true));
    client.publish(topic, messages);
    console.log(plantID);
  }, [lightToggle]);

  return (
    <MqttContext.Provider
      value={{
        messages,
        setMessages,
        lightToggle,
        setLightToggle,
        messages2,
        setMessages2,
        plantID,
        setPlantID,
      }}
    >
      {children}
    </MqttContext.Provider>
  );
}
