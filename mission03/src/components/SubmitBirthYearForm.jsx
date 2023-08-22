function SubmitBirthYearForm() {
  return (
    <form>
      <label htmlFor="getBirthYear">언제 태어났나요?</label>
      <div>
        🎉
        <input type="text" id="getBirthYear" name="getBirthYear" />
        <button type="submit">년에 태어났어요🎉</button>
      </div>
    </form>
  );
}

export default SubmitBirthYearForm;
