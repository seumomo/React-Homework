import useBirth from "../hooks/useBirth";
import useHoroscope from "../hooks/useHoroscope";
import Navigation from "./../layout/Navigation";

function Horoscope() {
  const [birth] = useBirth();
  const { year, koreanZodiacSign } = birth;

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-y-12">
        <h2 className="text-4xl font-semibold text-green-500">
          오늘의 운세!😁
        </h2>
        <div className="text-2xl">
          {`${year}`}년생 {`${koreanZodiacSign}`}의 오늘의 운세는 다음과 같아요.
        </div>
        <div className="w-3/4 rounded-lg border-2 border-green-600 bg-yellow-500 p-3 text-center text-lg text-black">
          {useHoroscope()}
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Horoscope;
