import React, { useContext, useState, useEffect, createContext } from "react";
import * as mqtt from "mqtt";

const MqttContext = createContext<any>({});
var client = mqtt.connect(`${process.env.CLOUD_MQTT_URL}`, {
  username: process.env.CLOUD_MQTT_USERNAME,
  password: process.env.CLOUD_MQTT_PASSWORD,
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
  const [waterToggle, setWaterToggle] = useState<boolean>(false);

  let topic: string = `light/${plantID}/request`;
  let topicWater: string = `water/${plantID}/request`;

  useEffect(() => {
    client.on("connect", () => setConnectionStatus(true));
    client.publish(topic, messages);
  }, [lightToggle]);

  useEffect(() => {
    client.on("connect", () => setConnectionStatus(true));
    client.publish(topicWater, messages2);
  }, [waterToggle]);

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
        waterToggle,
        setWaterToggle,
      }}
    >
      {children}
    </MqttContext.Provider>
  );
}
