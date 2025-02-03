import { useCallback, useState } from "react";
import Child from "./Child";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <h1>Welcome to My Website</h1>
      <p>This is a simple section with content.</p>

      <h2>Count - {count}</h2>

      {/* <button className="btn" onClick={handleClick}>
        Click
      </button> */}

      <Child click={handleClick} />
    </>
  );
}
