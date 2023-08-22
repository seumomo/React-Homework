import Logo from '../components/Logo';
import SubmitBirthYearForm from '../components/SubmitBirthYearForm';

function GetBirthYear() {
  return (
    <div className="mt-28 flex flex-col gap-y-14">
      <Logo destination={'/'} />
      <SubmitBirthYearForm />
    </div>
  );
}

export default GetBirthYear;
