import { records } from "../api/pocketbase";

function Navigation() {
  return (
    <>
      {records?.map((item) => {
        <>
          <div>{item.korean_zodiac_sign}</div>
          <div>{item.comment}</div>
        </>;
      })}
    </>
  );
}

export default Navigation;
