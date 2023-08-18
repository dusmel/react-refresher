import { useContext } from "react";
import { SomeContext } from "../helpers/someContext";
import Button from "./Button";

const RenderContextData = () => {
  //  dispatch is just a name but the idea is a function to mutate the context data
  const [count, dispatch] = useContext(SomeContext);

  const changeCount = () => {
    const random = Math.ceil(Math.random() * 10);
    dispatch(random);
  };
  return (
    <div>
      <p> count from context is: {count}</p>
      <Button onClick={changeCount}>Change count</Button>
    </div>
  );
};

export default RenderContextData;
