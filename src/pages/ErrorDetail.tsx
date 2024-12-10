import { isRouteErrorResponse, useRouteError } from "react-router-dom";

type Props = {};

const ErrorDetail = (props: Props) => {
  const error = useRouteError();
  return (
    <div>
      {isRouteErrorResponse(error)
        ? "La paguina no exsite"
        : `Ha  ocurrido un error ${(error as Error).message}`}
    </div>
  );
};

export default ErrorDetail;
