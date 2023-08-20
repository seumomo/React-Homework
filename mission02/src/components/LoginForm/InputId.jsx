/* eslint-disable react/prop-types */
function InputId({ value, idIsValid, ...restProps }) {
  return (
    <>
      <label htmlFor="inputId" className="sr-only">
        아이디 입력 창
      </label>
      <input
        type="email"
        name="inputId"
        id="inputId"
        value={value}
        {...restProps}
        placeholder={'아이디를 입력해 주세요.'}
        pattern={'.+@naver.com$'}
        title={"아이디는 '@naver.com'으로 끝나야 합니다."}
        required
        className="w-[460px] h-12 border border-solid border-gray-400 placeholder: pl-[14px] focus:outline-[#03CF5D] hover:border-[#03CF5D]"
      />
      <p
        className={`${
          idIsValid ? 'text-[#03CF5D]' : 'text-red-500'
        } self-start text-xs`}>
        {value === ''
          ? ''
          : idIsValid
          ? '올바른 아이디 형식입니다.'
          : "아이디는 '@naver.com'으로 끝나도록 작성해 주세요."}
      </p>
    </>
  );
}

export default InputId;
