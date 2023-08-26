import GoNextButton from "../components/GoNextButton";

function Landing() {
  return (
    <>
      <div className="mx-auto flex flex-col gap-y-14 text-center">
        <h2 className="sr-only">서비스 소개</h2>

        <div className="mx-auto flex flex-col gap-y-10">
          <p className="text-3xl">
            내가 <span className="font-semibold text-red-700">로또</span>를...
            사도 될까? 🤔
          </p>

          <p className="text-2xl">좋은 꿈을 꾸셨나요?</p>

          <div className="flex flex-col gap-y-8 text-xl">
            <span>위의 빨간 버튼을 클릭하고</span>{" "}
            <div>
              <span>오늘의 </span>
              <h3 className="inline">
                <span className="inline text-4xl font-semibold text-red-700">
                  띠별 운세
                </span>
                <span>를 확인해 보세요!</span>
              </h3>
            </div>
          </div>

          <p className="text-2xl">
            물론! 좋은 꿈을 꾸지 않으셨어도 확인 가능합니다 😁
          </p>

          <GoNextButton />
        </div>
      </div>
    </>
  );
}

export default Landing;
