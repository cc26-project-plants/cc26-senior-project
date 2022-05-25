import { useState, useEffect } from "react";

interface CoolProps {
  foo: number;
  bar?: string;
}

const Feed = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((num) => num + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};

export default Feed;
