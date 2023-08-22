function SubmitBirthYearForm() {
  return (
    <form className="flex flex-col items-center gap-y-10">
      <label htmlFor="getBirthYear" className="text-5xl">
        언제 태어났나요?
      </label>
      <div className="text-3xl">
        🎉{' '}
        <input
          type="text"
          id="getBirthYear"
          name="getBirthYear"
          className="border-2 rounded-3xl border-red-500 focus:outline-green-500 text-center w-64"
          required
          placeholder="출생년도 4자리"
          minLength={4}
          maxLength={4}
          title="출생년도 4자리를 입력해 주세요."
        />
        <button type="submit" className="font-bold">
          년에 태어났어요 🎉
        </button>
      </div>
    </form>
  );
}

export default SubmitBirthYearForm;
