const splitUnit = (value) => {
  const number = parseFloat(value);
  const unit = value.replace(number, '');
  return [number, unit];
};

export default splitUnit;
