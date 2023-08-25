function getDateType() {
  const date = new Date().getDate();

  return date % 2 === 0 ? "Even" : "Odd";
}

export default getDateType;
