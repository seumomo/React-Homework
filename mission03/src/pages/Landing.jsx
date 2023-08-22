function Landing() {
  return (
    <>
      <div className="flex flex-col gap-y-14 text-center mx-auto mt-28">
        <h1 className="text-6xl py-7 w-5/6 bg-red-700 mx-auto text-white rounded-full">
          Can I buy... a lotto?
        </h1>
        <div className="flex flex-col gap-y-10 mt-10 mx-auto">
          <p className="text-3xl">내가 로또를... 사도 될까? 🤔</p>
          <p className="text-2xl">좋은 꿈을 꾸셨나요?</p>
          <p className="text-xl">
            그렇다면, 오늘의{' '}
            <h2 className="inline text-4xl">
              <a href="/">띠별 운세</a>
            </h2>
            를 확인해 보세요!
          </p>
          <p className="text-2xl">
            물론! 좋은 꿈을 꾸지 않으셨어도 확인 가능합니다😁
          </p>
        </div>
        <div className="mt-20 mx-auto flex flex-col gap-y-16 w-2/3">
          <div className="flex justify-between">
            <span className="text-5xl">🐭</span>
            <span className="text-5xl">🐮</span>
            <span className="text-5xl">🐯</span>
            <span className="text-5xl">🐰</span>
            <span className="text-5xl">🐲</span>
            <span className="text-5xl">🐍</span>
          </div>
          <div className="flex justify-between">
            <span className="text-5xl">🐴</span>
            <span className="text-5xl">🐑</span>
            <span className="text-5xl">🐵</span>
            <span className="text-5xl">🐔</span>
            <span className="text-5xl">🐶</span>
            <span className="text-5xl">🐷</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
