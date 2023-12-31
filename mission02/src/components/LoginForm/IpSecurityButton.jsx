function IpSecurityButton() {
  return (
    <div className="flex items-center">
      <label htmlFor="IpSecurity" className="text-sm pr-1">
        IP 보안
      </label>
      <input
        type="checkbox"
        name="IpSecurity"
        id="IpSecurity"
        className="appearance-none after:bg-[url('/ipSecurity_OFF.svg')] after:w-7 after:h-3 after:block after:checked:bg-[url('/ipSecurity_ON.svg')] after:bg-no-repeat ipSecurityButton"
      />
    </div>
  );
}

export default IpSecurityButton;
