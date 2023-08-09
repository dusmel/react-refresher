import { useState, useMemo } from "react";
import factorialOf from "../../helpers/factorialOf";

// @ts-check
/**
 * @summary implement a simple memoization by calculatin factorial of a given number and to prove that the function wasnt called if dependencies didnt change you can play with Re-render button by either changing some random state or give number a value and click twice
 * @author Hadad
 */
const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [_, setInc] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);

  return (
    <div className={_}>
      Factorial of{"  "}
      <input value={number} onChange={onChange} /> {"  "}
      is {factorial}
      <br />
      <button onClick={onClick}>Re-render</button>
    </div>
  );
};

export default UseMemo;
