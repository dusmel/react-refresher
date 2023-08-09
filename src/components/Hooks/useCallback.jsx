import { useCallback, useState } from "react";
import Form from "../Form";

const UseCallback = () => {
  // this to be used to change parent and observe if the form child will also re render while wrapped in a memo
  const [someClass, setClassName] = useState("");

  const handleSubmit = useCallback(() => {
    console.log("clicked on submit");
    setClassName("submitted");
  }, []);

  return (
    <div className={someClass}>
      <Form submit={handleSubmit} />
    </div>
  );
};

export default UseCallback;
