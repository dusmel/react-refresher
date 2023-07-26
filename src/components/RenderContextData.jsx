import { useContext } from "react";
import { SomeContext } from "../helpers/someContext";

const RenderContextData = () => {
  const [count] = useContext(SomeContext);
  return (
    <div>
      <br />
      count from context is: {count}
    </div>
  );
};

export default RenderContextData;
