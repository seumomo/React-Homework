import { useEffect, useState } from 'react';

import NaverLogo from './LoginForm/NaverLogo';
import InputId from './LoginForm/InputId';
import InputPw from './LoginForm/InputPw';
import LoginButton from './LoginForm/LoginButton';
import MaintainLoginButton from './LoginForm/MaintainLoginButton';
import IpSecurityButton from './LoginForm/IpSecurityButton';

import { validationId, validationPw } from './utils';

function LoginForm() {
  const [inputText, setInputText] = useState({
    idValue: '',
    pwValue: '',
  });

  const [validation, setValidation] = useState({
    idIsValid: '',
    pwIsValid: '',
  });

  useEffect(() => {
    validationId(inputText.idValue)
      ? setValidation(prevState => ({
          ...prevState,
          idIsValid: true,
        }))
      : setValidation(prevState => ({
          ...prevState,
          idIsValid: false,
        }));
  }, [inputText.idValue]);

  useEffect(() => {
    validationPw(inputText.pwValue)
      ? setValidation(prevState => ({
          ...prevState,
          pwIsValid: true,
        }))
      : setValidation(prevState => ({
          ...prevState,
          pwIsValid: false,
        }));
  }, [inputText.pwValue]);

  return (
    <div className="mt-[100px] min-w-[769px]">
      <div className="mx-auto w-max">
        <h1 className="sr-only">NAVER</h1>
        <NaverLogo />
      </div>

      <h2 className="sr-only">로그인 페이지</h2>

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
              idIsValid={validation.idIsValid}
            />

            <InputPw
              value={inputText.pwValue}
              onChange={e => {
                setInputText(prevState => ({
                  ...prevState,
                  pwValue: e.target.value,
                }));
              }}
              pwIsValid={validation.pwIsValid}
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
