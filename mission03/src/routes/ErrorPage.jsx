import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col mx-auto mt-32 w-[600px] items-center gap-y-10">
      <h1 className="text-red-500 text-8xl font-black">이런!</h1>
      <p className="text-red-500 font-semibold text-xl">
        죄송합니다. 예상치 못한 오류가 발생했습니다.
      </p>
      <p className="text-red-500 text-xl font-medium">
        오류의 내용은 다음과 같습니다.
      </p>
      <p className="text-red-500 text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
