import React, { useContext, useState, useEffect, createContext } from "react";
import * as mqtt from "mqtt";
let client: mqtt.MqttClient = mqtt.connect("ws://192.168.10.79:8888");

const MqttContext = createContext<any>({});

export function useMqtt() {
  return useContext(MqttContext);
}

export default function MqttProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [messages, setMessages] = useState("");
  const [lightToggle, setLightToggle] = useState(false);
  //TODO
  const [lightStatus, setLightStatus] = useState(false);
  let topic = "light/request";

  useEffect(() => {
    console.log("client", client);
    client.on("connect", () => setConnectionStatus(true));
    client.publish(topic, messages);
    console.log("publisher.publish:", messages);
    console.log("Pass");
  }, [lightToggle]);

  return (
    <MqttContext.Provider
      value={{
        messages,
        setMessages,
        lightToggle,
        setLightToggle,
      }}
    >
      {children}
    </MqttContext.Provider>
  );
}
