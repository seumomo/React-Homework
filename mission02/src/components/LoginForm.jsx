import { useState } from 'react';
import InputId from './LoginForm/InputId';
import InputPw from './LoginForm/InputPw';
import IpSecurityButton from './LoginForm/IpSecurityButton';
import LoginButton from './LoginForm/LoginButton';
import MaintainLoginButton from './LoginForm/MaintainLoginButton';
import NaverLogo from './LoginForm/NaverLogo';
import { useEffect } from 'react';
import { validationId, validationPw } from './utils';

function LoginForm() {
  const [inputText, setInputText] = useState({
    idValue: '',
    pwValue: '',
  });
  const [validation, setValidation] = useState({
    idIsValid: '',
    pwIsValid: '',
    idShowMessage: '',
    pwShowMessage: '',
    idMessageColor: '',
    pwMessageColor: '',
  });
  const [isChecked, setIsChecked] = useState({
    maintainLogin: false,
    ipSecurity: false,
  });

  useEffect(() => {
    validationId(inputText.idValue)
      ? setValidation(prevState => ({
          ...prevState,
          idIsValid: true,
          idShowMessage: '올바른 아이디 형식입니다.',
          idMessageColor: 'text-[#03CF5D]',
        }))
      : setValidation(prevState => ({
          ...prevState,
          idIsValid: false,
          idShowMessage: "아이디는 '@naver.com'으로 끝나도록 작성해 주세요.",
          idMessageColor: 'text-red-500',
        }));
  }, [inputText.idValue]);
  useEffect(() => {
    validationPw(inputText.pwValue)
      ? setValidation(prevState => ({
          ...prevState,
          pwIsValid: true,
          pwShowMessage: '올바른 비밀번호 형식입니다.',
          pwMessageColor: 'text-[#03CF5D]',
        }))
      : setValidation(prevState => ({
          ...prevState,
          pwIsValid: false,
          pwShowMessage:
            '비밀번호는 숫자, 영어 대소문자, 특수문자(~!@#$%^&*)를 포함하여 8~16자로 작성해 주세요.',
          pwMessageColor: 'text-red-500',
        }));
  }, [inputText.pwValue]);
  return (
    <div className="mt-[100px] min-w-[769px]">
      <div className="mx-auto w-max">
        <h1 className="sr-only">NAVER</h1>
        <NaverLogo />
      </div>
      <form
        action="./"
        className="w-[460px] h-[222px] mx-auto"
        method="POST"
        onSubmit={e => {
          e.preventDefault();
          alert('로그인에 성공했습니다.');
          location.href = 'https://www.naver.com';
        }}>
        <div className="flex flex-col items-center mt-[50px] gap-y-5">
          <div className="gap-y-2.5 flex flex-col items-center">
            <InputId
              value={inputText.idValue}
              onChange={e => {
                setInputText(prevState => ({
                  ...prevState,
                  idValue: e.target.value,
                }));
              }}
              idShowMessage={validation.idShowMessage}
              idMessageColor={validation.idMessageColor}
            />
            <InputPw
              value={inputText.pwValue}
              onChange={e => {
                setInputText(prevState => ({
                  ...prevState,
                  pwValue: e.target.value,
                }));
              }}
              pwShowMessage={validation.pwShowMessage}
              pwMessageColor={validation.pwMessageColor}
            />
          </div>
          <LoginButton isValid={validation.idIsValid && validation.pwIsValid} />
        </div>
        <div className="flex justify-between mt-3">
          <MaintainLoginButton
            onClick={e => {
              if (e.target.checked) {
                alert(
                  '로그인 상태가 저장되었습니다.\n개인정보 보호를 위해 개인 기기에서만 해당 기능을 사용해 주세요.'
                );
              }
            }}
          />
          <IpSecurityButton />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
