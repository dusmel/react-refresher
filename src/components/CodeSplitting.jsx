import { Suspense, lazy, startTransition, useState } from "react";
import Button from "./Button";
import Loader from "./Icons/Loader";

const RenderNotes = lazy(() => import("./RenderNotes"));
const Modal = lazy(() => import("./Modal"));

const CodeSplitting = () => {
  const [show, setShow] = useState(false);

  function openModal() {
    startTransition(() => {
      setShow(true);
    });
  }

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex gap-2">
            Getting notes <Loader />
          </div>
        }
      >
        <RenderNotes
          note={
            "` The Modal does not need to be rendered before being clicked, before you click the button check  dev tool network and notice that the modal component >>will be loaded after clicking.}` \n\n  The Modal does not need to be rendered before being clicked. Before you click the button check  `dev tool network` and notice that the modal component will be loaded after clicking.} \n ## 3 things needed for code splitting: \n - dynamic import supported by es6 \n - lazy function to lazy load components \n  - <Suspense /> component with a fallback while waiting for the lazy component to load"
          }
        />
      </Suspense>

      <Button onClick={openModal}>open lazy loaded modal</Button>

      {show && (
        <Modal closeOnClick={() => setShow(false)}>
          <p> I am opened as a modal</p>

          <Button onClick={() => setShow(false)}>close me</Button>
        </Modal>
      )}
    </div>
  );
};

export default CodeSplitting;

export const Component = CodeSplitting;
