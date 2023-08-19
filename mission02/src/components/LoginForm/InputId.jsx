/* eslint-disable react/no-unescaped-entities */
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { validationId } from './validation';

function InputId({ value, isValid, showMessage, ...restProps }) {
  // const [showMessage, setShowMessage] = useState('');
  const messageColor = isValid ? 'text-[#03CF5D]' : 'text-red-500';
  // useEffect(() => {
  // if (value === '') {
  // setShowMessage('');
  // } else if (!validationId(value)) {
  // setShowMessage("아이디는 '@naver.com'으로 끝나도록 작성해 주세요.");
  // } else {
  // setShowMessage('올바른 아이디 형식입니다.');
  // }
  // }, [value]);
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
      <p className={`${messageColor} self-start text-xs showMessage`}>
        {showMessage}
      </p>
    </>
  );
}

export default InputId;
