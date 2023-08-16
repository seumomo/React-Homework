import LoginButton from './LoginForm/LoginButton';
import MaintainLoginButton from './LoginForm/MaintainLoginButton';
import IpSecurityButton from './LoginForm/IpSecurityButton';
import NaverLogo from './LoginForm/NaverLogo';
import InputBox from './LoginForm/InputBox';

function LoginForm() {
  return (
    <div className="gap-[50px] flex flex-col mt-[100px] mx-auto mb-[190px] h-[600px] min-w-[769px]">
      <div className="flex justify-center">
        <h1 className="sr-only">NAVER</h1>
        <NaverLogo />
      </div>
      <div className="flex flex-col items-center gap-y-2.5">
        <InputBox />
        <InputBox />
      </div>
      <div className="flex flex-col items-center">
        <LoginButton />
        <MaintainLoginButton />
        <IpSecurityButton />
      </div>
    </div>
  );
}

export default LoginForm;
