import { useState } from "react";
import SubmitBirthYearForm from "../components/SubmitBirthYearForm";
import debounce from "./../utils/debounce";

function GetBirthYear() {
  const [yearValue, setYearValue] = useState("");
  const handleChangeYearValue = debounce((e) => {
    setYearValue(e.target.value);
  });

  return (
    <div className="mt-20 flex flex-col gap-y-14">
      <SubmitBirthYearForm value={yearValue} onChange={handleChangeYearValue} />
    </div>
  );
}

export default GetBirthYear;
