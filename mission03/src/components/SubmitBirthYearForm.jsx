import useYear from "../hooks/useYear";
import getKoreanZodiacSign from "../utils/getKoreanZodiacSign";

function SubmitBirthYearForm() {
  const [year, handleChangeYear] = useYear();
  const isFull = year.length === 4;

  return (
    <form className="flex flex-col items-center gap-y-10">
      <label htmlFor="getBirthYear" className="text-5xl">
        몇 년도에 태어나셨나요?
      </label>

      <div className="text-3xl">
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
          title="출생년도 4자리를 입력해 주세요."
          defaultValue={year}
          onChange={handleChangeYear}
        />
        <button
          type="submit"
          className={`disabled: ml-4 font-bold transition-all duration-500 enabled:text-orange-500 disabled:text-black`}
          disabled={isFull ? false : true}
          onClick={(e) => {
            e.preventDefault();
            getKoreanZodiacSign(year);
          }}
        >
          년에 태어났어요 🎉
        </button>
        {isFull}
        <p
          className={`relative right-0 ${
            isFull ? "visible opacity-100" : "invisible opacity-0"
          } -top-3 right-11 text-right text-lg text-green-500 transition-all duration-500`}
        >
          👆 여기를 눌러주세요! 👆
        </p>
      </div>
    </form>
  );
}

export default SubmitBirthYearForm;
