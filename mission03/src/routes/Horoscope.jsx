import useBirth from "../hooks/useBirth";
import useHoroscope from "../hooks/useHoroscope";

function Horoscope() {
  const [birth] = useBirth();
  const { year, koreanZodiacSign } = birth;

  return (
    <>
      <h2>오늘의 운세 보기!😁</h2>
      <div>
        {`${year}`}년생 {`${koreanZodiacSign}`}의 오늘의 운세는 다음과 같아요.
      </div>
      <div>{useHoroscope()}</div>
    </>
  );
}

export default Horoscope;
