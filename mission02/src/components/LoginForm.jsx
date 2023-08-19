import LoginButton from './LoginForm/LoginButton';
import MaintainLoginButton from './LoginForm/MaintainLoginButton';
import IpSecurityButton from './LoginForm/IpSecurityButton';
import NaverLogo from './LoginForm/NaverLogo';
import InputPw from './LoginForm/InputPw';
import InputId from './LoginForm/InputId';
import { useState } from 'react';
import { validationId } from './LoginForm/validation';

function LoginForm() {
  const [validations, setValidations] = useState({
    id: '',
    pw: '',
    idIsValid: '',
    pwIsValid: '',
    showMessage: '',
  });
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
              value={validations.id}
              onChange={e => {
                setValidations({ id: e.target.value });
              }}
              isValid={(validations.idIsValid = validationId(validations.id))}
              // showMessage={setValidations({
              //   showMessage: validations.idIsValid
              //     ? '올바른 아이디 형식입니다.'
              //     : "아이디는 '@naver.com'으로 끝나도록 작성해 주세요.",
              // })}
            />
            <InputPw
              value={validations.pw}
              onChange={e => {
                setValidations({ pw: e.target.value });
              }}
              isValid={(validations.pwIsValid = validationId(validations.pw))}
              showMessage={validations.showMessage}
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
