import { useState } from "react";
import { records } from "../api/pocketbase";
import GoHomeButton from "../components/GoHomeButton";
import Modal from "../components/Modal";
import useBirth from "../hooks/useBirth";
import useHoroscope from "../hooks/useHoroscope";
import Navigation from "./../layout/Navigation";

function Horoscope() {
  const { birth } = useBirth();
  const { koreanZodiacSign } = birth;
  const [targetHoroscope, setTargetHoroscope] = useState({
    koreanZodiacSign: "",
    comment: "",
  });
  const [, forceRendering] = useState();

  const handleOpenModal = (e) => {
    document.querySelector("#modalContainer").classList.remove("hidden");

    setTargetHoroscope((prevState) => ({
      ...prevState,
      koreanZodiacSign: e.target.textContent,
    }));

    records.map((item) => {
      if (item.korean_zodiac_sign === e.target.textContent) {
        setTargetHoroscope((prevState) => ({
          ...prevState,
          comment: item.comment,
        }));
        return;
      } else {
        return;
      }
    });
  };

  const handleCloseModal = () => {
    document.querySelector("#modalContainer").classList.add("hidden");
    forceRendering({});
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-y-12">
        <h2 className="text-5xl font-semibold text-green-500">
          오늘의 운세!😁
        </h2>

        <div className="text-3xl">
          {`${koreanZodiacSign}`}의 오늘의 운세는 다음과 같아요.
        </div>

        <div className="flex h-80 w-3/4 flex-col justify-center rounded-lg border-2 border-green-500 bg-yellow-400 p-5 text-center text-xl text-black">
          {useHoroscope()}
        </div>
      </div>

      <Modal value={targetHoroscope} onClick={handleCloseModal} />
      <GoHomeButton />
      <Navigation onClick={handleOpenModal} />
    </div>
  );
}

export default Horoscope;
