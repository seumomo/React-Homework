import useBirth from "../hooks/useBirth";
import useHoroscope from "../hooks/useHoroscope";
import Navigation from "./Navigation";

function Horoscope() {
  const [birth] = useBirth();
  const { year, koreanZodiacSign } = birth;

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center gap-y-12">
        <h2 className="text-4xl text-green-500">오늘의 운세 보기!😁</h2>
        <div className="text-2xl">
          {`${year}`}년생 {`${koreanZodiacSign}`}의 오늘의 운세는 다음과 같아요.
        </div>
        <div className="w-3/4 rounded-lg border-2 border-black bg-slate-500 p-3 text-center text-lg text-white">
          {useHoroscope()}
        </div>
      </div>
    </>
  );
}

export default Horoscope;
