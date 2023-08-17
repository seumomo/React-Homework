function MaintainLoginButton() {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name="maintainLogin"
        id="maintainLogin"
        className="appearance-none before:bg-[url('/src/assets/maintainLoginButton_default.svg')] before:w-6 before:h-6 before:block before:checked:bg-[url('/src/assets/maintainLoginButton_checked.svg')] before:bg-cover before:bg-no-repeat"
      />
      <label htmlFor="maintainLogin" className="text-sm pl-2">
        로그인 상태 유지
      </label>
    </div>
  );
}

export default MaintainLoginButton;
