import { useNavigate } from "react-router-dom";
import useBirth from "../hooks/useBirth";
import limitInputNumber from "./../utils/limitInputNumber";

function GetBirthYear() {
  const [birth, handleChangeYear, getSign] = useBirth();
  const isFull = birth.year.length === 4;
  const navigate = useNavigate();

  function handleCheckBirth(e) {
    e.preventDefault();
    navigate("/horoscope");
    if (getSign(birth.year) === undefined) {
      return;
    }
  }

  return (
    <div className="mt-20 flex flex-col gap-y-14">
      <h2 className="sr-only">출생연도 입력하기</h2>
      <form
        className="flex flex-col items-center gap-y-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="getBirthYear" className="text-5xl">
          몇 년도에 태어나셨나요?
        </label>

        <div className="flex flex-col items-center gap-y-10 text-3xl">
          <div>
            🎉{" "}
            <input
              type="number"
              id="getBirthYear"
              name="getBirthYear"
              className="m-0 h-14 w-64 rounded-full border-2 border-red-500 text-center transition-all focus:w-36 focus:outline-green-500 focus:placeholder:text-transparent"
              required
              placeholder="출생년도 4자리"
              minLength={4}
              maxLength={4}
              onInput={limitInputNumber}
              title="출생년도 4자리를 입력해 주세요."
              defaultValue={birth.year}
              onChange={handleChangeYear}
            />
            <span className="ml-4 font-bold">년에 태어났어요 🎉</span>
          </div>
          {isFull ? (
            <button
              className="text-3xl font-bold text-green-500 transition-all"
              onClick={handleCheckBirth}
            >
              운세보러 가기! 👉
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}

export default GetBirthYear;
