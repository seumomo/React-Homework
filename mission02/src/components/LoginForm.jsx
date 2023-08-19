import { useState } from 'react';
import InputId from './LoginForm/InputId';
import InputPw from './LoginForm/InputPw';
import IpSecurityButton from './LoginForm/IpSecurityButton';
import LoginButton from './LoginForm/LoginButton';
import MaintainLoginButton from './LoginForm/MaintainLoginButton';
import NaverLogo from './LoginForm/NaverLogo';
import { validationId, validationPw } from './LoginForm/validation';

function LoginForm() {
  const [validations, setValidations] = useState({
    idValue: '',
    pwValue: '',
    idIsValid: '',
    pwIsValid: '',
    idShowMessage: '',
    pwShowMessage: '',
    idMessageColor: '',
    pwMessageColor: '',
  });
  const idIsValid = validationId(validations.idValue);
  const pwIsValid = validationPw(validations.pwValue);
  return (
    <div className="mt-[100px] min-w-[769px]">
      <div className="mx-auto w-max">
        <h1 className="sr-only">NAVER</h1>
        <NaverLogo />
      </div>
      <form action="/" className="w-[460px] h-[222px] mx-auto" method="POST">
        <div className="flex flex-col items-center mt-[50px] gap-y-5">
          <div className="gap-y-2.5 flex flex-col items-center">
            <InputId
              value={validations.idValue || ''}
              onChange={e => {
                setValidations({
                  idValue: e.target.value,
                  idIsValid: idIsValid,
                });
              }}
              idShowMessage={
                idIsValid
                  ? '올바른 아이디 형식입니다.'
                  : "아이디는 '@naver.com'으로 끝나도록 작성해 주세요."
              }
              idMessageColor={idIsValid ? 'text-[#03CF5D]' : 'text-red-500'}
            />
            <InputPw
              value={validations.pwValue || ''}
              onChange={e => {
                setValidations({
                  pwValue: e.target.value,
                  pwIsValid: pwIsValid,
                });
              }}
              pwShowMessage={
                pwIsValid
                  ? '올바른 비밀번호 형식입니다.'
                  : "아이디는 '비밀번호는 숫자, 영어 대소문자, 특수문자(~!@#$%^&*)를 포함하여 8~16자로 작성해 주세요.'으로 끝나도록 작성해 주세요."
              }
              pwMessageColor={pwIsValid ? 'text-[#03CF5D]' : 'text-red-500'}
            />
          </div>
          <LoginButton isValid={false} />
        </div>
        <div className="flex justify-between mt-3">
          <MaintainLoginButton />
          <IpSecurityButton />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
