import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="mx-auto mt-32 flex w-[600px] flex-col items-center gap-y-10"
    >
      <h1 className="text-8xl font-black text-red-500">이런!</h1>
      <p className="text-xl font-semibold text-red-500">
        죄송합니다. 예상치 못한 오류가 발생했습니다.
      </p>
      <p className="text-xl font-medium text-red-500">
        오류의 내용은 다음과 같습니다.
      </p>
      <p className="text-lg text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
