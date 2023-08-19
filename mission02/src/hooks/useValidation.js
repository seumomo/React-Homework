import { useState } from 'react';
import { useEffect } from 'react';

function useValidation() {
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
}

export default useValidation;
