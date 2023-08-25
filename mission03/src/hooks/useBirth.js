import { useContext } from "react";
import { BirthContext } from "../contexts/Birth";

function useBirth() {
  const value = useContext(BirthContext);

  if (value === undefined) {
    throw new Error("useBirth Hook은 BirthProvider 안에서 사용되어야 합니다.");
  }

  return value;
}

export default useBirth;
