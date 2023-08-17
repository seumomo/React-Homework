function InputBox({ boxType }) {
  return (
    <>
      <label
        htmlFor={boxType === 'id' ? 'inputId' : 'inputPw'}
        className="sr-only">
        {boxType === 'id' ? '아이디 입력 창' : '비밀번호 입력 창'}
      </label>
      <input
        type="text"
        name={boxType === 'id' ? 'inputId' : 'inputPw'}
        id={boxType === 'id' ? 'inputId' : 'inputPw'}
        placeholder={
          boxType === 'id'
            ? '아이디를 입력해 주세요.'
            : '비밀번호를 입력해 주세요.'
        }
        required
        className="w-[460px] h-12 border border-solid border-gray-400 placeholder: pl-[14px]"
      />
    </>
  );
}

export default InputBox;
