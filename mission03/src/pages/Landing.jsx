import KoreanZodiacSign from '../components/KoreanZodiacSign';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div className="flex flex-col gap-y-14 text-center mx-auto mt-28">
        <Link
          to={`/getbirthyear`}
          className="bg-red-700 rounded-full w-5/6 mx-auto py-7 hover:scale-110 transition-all">
          <h1 className="text-6xl text-white">Can I buy... a lotto?</h1>
        </Link>
        <div className="flex flex-col gap-y-10 mt-10 mx-auto">
          <p className="text-3xl">
            내가 <span className="text-red-700 font-semibold">로또</span>를...
            사도 될까? 🤔
          </p>
          <p className="text-2xl">좋은 꿈을 꾸셨나요?</p>
          <div className="text-xl flex flex-col gap-y-8">
            <span>위의 빨간 버튼을 클릭하고</span>{' '}
            <div>
              <span>오늘의 </span>
              <h2 className="inline text-4xl text-red-700 font-semibold">
                띠별 운세
              </h2>
              <span>를 확인해 보세요!</span>
            </div>
          </div>
          <p className="text-2xl">
            물론! 좋은 꿈을 꾸지 않으셨어도 확인 가능합니다 😁
          </p>
        </div>
        <KoreanZodiacSign />
      </div>
    </>
  );
}

export default Landing;
