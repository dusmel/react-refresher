import { memo, useId } from "react";

// This form is just to prove a point of useCallback and memo
const Form = memo(function Form ({ submit }) {
  const id = useId();
  console.log("component rendered", id);
  return (
    <div>
      <div>
        <label htmlFor={id}>Label for input {id}</label>
        <input type="text" id={id} />
        <button onClick={submit}>change parent state</button>
      </div>
    </div>
  );
});

export default Form;
