function InputBox() {
  return (
    <>
      <label htmlFor="inputId"></label>
      <input
        type="text"
        name="inputId"
        id="inputId"
        placeholder="아이디를 입력해 주세요."
        required
        className="w-[460px] h-12 border border-solid border-gray-400"
      />
    </>
  );
}

export default InputBox;
