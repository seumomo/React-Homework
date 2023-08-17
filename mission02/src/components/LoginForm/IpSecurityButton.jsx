function IpSecurityButton() {
  return (
    <div>
      <label htmlFor="IpSecurity" className="text-sm pr-1">
        IP 보안
      </label>
      <input
        type="checkbox"
        name="IpSecurity"
        id="IpSecurity"
        className="hidden"
      />
    </div>
  );
}

export default IpSecurityButton;
