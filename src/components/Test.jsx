import ErrorBoundary from "./ErrorBoundary";

const Test = (props) => {
  
  if (props.shouldThrowError) throw new Error("something happened");

  return <div>I should display Test</div>;
};

const TestErrorProtected = (props) => (
  <ErrorBoundary
    fallback={
      <p style={{ color: "red" }}>This should display in case of an error</p>
    }
  >
    <Test {...props} />
  </ErrorBoundary>
);

export default TestErrorProtected;
