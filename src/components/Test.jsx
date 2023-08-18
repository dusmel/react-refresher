import ErrorBoundary from "./ErrorBoundary";

const Test = (props) => {
  if (props.shouldThrowError) throw new Error("something happened");

  return <div>I should display Test</div>;
};

const TestErrorProtected = (props) => (
  <div>
    <p className="mb-3">
      Error Boundaries: Think of it like the try and catch of React apps, because
      in a sense it literally is. Error boundary component should be a class
      component because of 2 components that isnt available on function component
    </p>
    <ErrorBoundary
      fallback={
        <p style={{ color: "red" }}>This should display in case of an error</p>
      }
    >
      <Test {...props} />
    </ErrorBoundary>
  </div>
);

export default TestErrorProtected;
