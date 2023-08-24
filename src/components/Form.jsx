import { memo, useId } from "react";
import Button from "./Button";
import RenderNotes from "./RenderNotes";

// This form is just to prove a point of useCallback and memo
const Form = memo(function Form({ submit }) {
  const id = useId();
  console.log("component rendered", id);
  return (
    <div>
      <div>
        <label className="mr-2" htmlFor={id}>
          Label for input {id}
        </label>
        <input type="text" id={id} />
      </div>
      <Button className="mt-3" onClick={submit}>
        change parent state
      </Button>

      {/* ************ notes ************** */}
      <section className="mt-3 text-sm flex justify-center">
        <RenderNotes
          note={" # Notes \n The point of this is to show that `UseCallback` component is calling Form component and because the later is wrapped with memo and the handleSubmit which is passed to the Form as a prop is using a useCallback. by clicking the button normally the form should re-render but it wont because of the combo memo(fn &rbrace return jsx &rbrace ) and useCallback(fn {}, [depend])       =====================================================================    check console log, for how many times component form was rendered: id: ${id}"}
        />
      </section>
    </div>
  );
});

export default Form;
