import { useEffect } from 'react';
import { useState } from 'react';
import { validationPw } from './validation';

function InputPw() {
  const [inputText, setInputText] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showMessage, setShowMessage] = useState('');
  const messageColor = isValid ? 'text-[#03CF5D]' : 'text-red-500';

  useEffect(() => {
    if (inputText === '') {
      setIsValid(true);
      setShowMessage('');
    } else if (!validationPw(inputText)) {
      setIsValid(false);
      setShowMessage(
        '비밀번호는 숫자, 영어 대소문자, 특수문자(~!@#$%^&*)를 포함하여 8~16자로 작성해 주세요.'
      );
    } else {
      setIsValid(true);
      setShowMessage('올바른 비밀번호 형식입니다.');
    }
  }, [inputText]);
  return (
    <>
      <label htmlFor="inputPw" className="sr-only">
        비밀번호 입력 창
      </label>
      <input
        type="password"
        name="inputPw"
        id="inputPw"
        value={inputText}
        onChange={e => {
          setInputText(e.target.value);
        }}
        placeholder={'비밀번호를 입력해 주세요.'}
        pattern={'^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$%^&*]).{8,16}$'}
        minLength="8"
        maxLength="16"
        title={
          '비밀번호는 숫자, 영어 대소문자, 특수문자(~!@#$%^&*)를 포함하여 8~16자로 작성하여야 합니다.'
        }
        required
        className="w-[460px] h-12 border border-solid border-gray-400 placeholder: pl-[14px] focus:outline-[#03CF5D] hover:border-[#03CF5D]"
      />
      <p className={`${messageColor} self-start text-xs showMessage`}>
        {showMessage}
      </p>
    </>
  );
}

export default InputPw;
