import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className=" text-red-400">{error.statusText || error.message}</i>
      </p>
      <Button
        onClick={() => navigate(-1)}
      >
        Go back!
      </Button>
    </div>
  );
}
