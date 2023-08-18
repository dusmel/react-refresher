import { useState } from "react";
import { SomeContext } from "../helpers/someContext";
import RenderContextData from "./RenderContextData";

const ContextWrapper = () => {
  const [count, setCount] = useState(0);
  return (
    <SomeContext.Provider value={[count, setCount]}>
      <RenderContextData />
    </SomeContext.Provider>
  );
};

export default ContextWrapper;
