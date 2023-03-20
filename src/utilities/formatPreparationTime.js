import formatStringByPattern from "format-string-by-pattern";

const formatPreparationTime = (anyString) => {
  const onlyNumbers = anyString.replace(/[^\d]/g, "");

  return formatStringByPattern("00:00:00", onlyNumbers);
};

export default formatPreparationTime;
