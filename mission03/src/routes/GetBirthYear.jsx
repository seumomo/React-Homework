import { useState } from 'react';
import SubmitBirthYearForm from '../components/SubmitBirthYearForm';

function GetBirthYear() {
  const [inputYear, setInputYear] = useState('');

  return (
    <div className="flex flex-col gap-y-14">
      <SubmitBirthYearForm value={inputYear} />
    </div>
  );
}

export default GetBirthYear;
