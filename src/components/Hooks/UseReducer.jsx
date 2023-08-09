import { useReducer } from "react";

const initialValue = { names: "John Doe", age: 0 };

function reducer(state = initialValue, { type, payload }) {
  switch (type) {
    case "CHANGE_AGE":
      return { ...state, age: payload };
    case "CHANGE_NAMES":
      return { ...state, names: payload };
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handleChange(e) {
    dispatch({ type: "CHANGE_NAMES", payload: e.target.value });
  }

  function changeAge() {
    const newAge = Math.ceil(Math.random() * 100);
    dispatch({ type: "CHANGE_AGE", payload: newAge });
  }

  return (
    <div>
      <input type="text" onChange={handleChange} defaultValue={state.names} />
      <br  />
      <br  />
      <button onClick={changeAge}>change random age</button>
      <br />
      Hello your name is {state.names} and age: {state.age}
    </div>
  );
};

export default UseReducer;
