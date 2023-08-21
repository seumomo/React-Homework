import SubmitBirthYearForm from '../components/SubmitBirthYearForm';

function Landing() {
  return (
    <>
      <div>
        <h1>
          <a href="/">Can I buy... a lotto?</a>
        </h1>
        <SubmitBirthYearForm />
      </div>
      <div>
        <p>내가 로또를... 사도 될까?</p>
        <p>좋은 꿈을 꾸셨나요?</p>
        <p>
          그렇다면! 오늘의 <h2>띠별 운세</h2>, <h2>별자리 운세</h2>를 확인해
          보세요!
        </p>
        <p>물론! 좋은 꿈을 꾸지 않으셨어도 확인 가능합니다😁</p>
      </div>
    </>
  );
}

export default Landing;
