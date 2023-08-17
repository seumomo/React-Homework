import LoginButton from './LoginForm/LoginButton';
import MaintainLoginButton from './LoginForm/MaintainLoginButton';
import IpSecurityButton from './LoginForm/IpSecurityButton';
import NaverLogo from './LoginForm/NaverLogo';
import InputBox from './LoginForm/InputBox';

function LoginForm() {
  return (
    <div className="mt-[100px] min-w-[769px]">
      <div className="mx-auto w-max">
        <h1 className="sr-only">NAVER</h1>
        <NaverLogo />
      </div>
      <form action="/" className="w-[460px] h-[222px] mx-auto">
        <div className="flex flex-col items-center mt-[50px] gap-y-5">
          <div className="gap-y-2.5 flex flex-col items-center">
            <InputBox boxType={'id'} />
            <InputBox boxType={'pw'} />
          </div>
          <LoginButton />
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
