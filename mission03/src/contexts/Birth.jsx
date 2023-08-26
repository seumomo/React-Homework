/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import debounce from "../utils/debounce";
import getKoreanZodiacSign from "../utils/getKoreanZodiacSign";

export const BirthContext = createContext({});

function BirthProvider({ displayName = "BirthContext", children }) {
  const [birth, setBirth] = useState({
    year: "",
    koreanZodiacSign: "",
  });

  const handleChangeYear = debounce((e) => {
    setBirth((prevState) => ({ ...prevState, year: e.target.value }));
  }, 150);

  const getSign = () => {
    setBirth((prevState) => ({
      ...prevState,
      koreanZodiacSign: getKoreanZodiacSign(birth.year),
    }));
  };

  return (
    <BirthContext.Provider
      value={{ birth, setBirth, handleChangeYear, getSign }}
      displayName={displayName}
    >
      {children}
    </BirthContext.Provider>
  );
}

export default BirthProvider;
