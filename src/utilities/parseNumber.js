const parseNumber = (value) => {
  if (!value) return value;
  const parsedValue = parseFloat(value);
  return isNaN(parsedValue) ? value : parsedValue;
};

export default parseNumber;
