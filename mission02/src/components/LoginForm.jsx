import InputId from './InputId';
import InputPw from './InputPw';
import LoginButton from './LoginButton';
import MaintainLoginButton from './MaintainLoginButton';
import IpSecurityButton from './IpSecurityButton';
import NaverLogo from './NaverLogo';

function LoginForm() {
  return (
    <div className="gap-[50px] flex flex-col mt-[100px] mx-auto mb-[190px] w-[800px] h-[600px] min-w-[769px]">
      <div className="flex justify-center">
        <h1 className="sr-only">NAVER</h1>
        <NaverLogo />
      </div>
      <div>
        <InputId />
        <InputPw />
        <LoginButton />
        <MaintainLoginButton />
        <IpSecurityButton />
      </div>
    </div>
  );
}

export default LoginForm;
