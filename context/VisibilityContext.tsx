import React, { useContext, useState, useEffect, createContext } from "react";

const VisibilityContext = createContext<any>({});

export function useVisibility() {
  return useContext(VisibilityContext);
}

export default function VisibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //Navbar control
  const [control, setControl] = useState(false);
  const [chart, setChart] = useState(true);

  return (
    <VisibilityContext.Provider
      value={{ control, setControl, chart, setChart }}
    >
      {children}
    </VisibilityContext.Provider>
  );
}
