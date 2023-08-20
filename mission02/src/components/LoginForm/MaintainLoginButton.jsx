function MaintainLoginButton({ onClick }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name="maintainLogin"
        id="maintainLogin"
        className="appearance-none before:bg-[url('/public/maintainLoginButton_default.svg')] before:w-6 before:h-6 before:block before:checked:bg-[url('/public/maintainLoginButton_checked.svg')] before:bg-cover before:bg-no-repeat maintainLoginButton"
        onClick={onClick}
      />
      <label htmlFor="maintainLogin" className="text-sm pl-2">
        로그인 상태 유지
      </label>
    </div>
  );
}

export default MaintainLoginButton;
