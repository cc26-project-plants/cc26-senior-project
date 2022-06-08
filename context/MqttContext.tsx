import React, { useContext, useState, useEffect, createContext } from "react";
import * as mqtt from "mqtt";
let client: mqtt.MqttClient = mqtt.connect("ws://192.168.10.79:8888");
// let client: mqtt.MqttClient = mqtt.connect(
//   "wss://happa-26-mqtt.an.r.appspot.com:8808"
// );

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
    client.on("connect", () => setConnectionStatus(true));
    client.publish(topic, messages);
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
