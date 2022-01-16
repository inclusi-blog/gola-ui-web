const conversionMapper = {
  thousands: { factor: 1000, identifier: 'K', roundOff: 1 },
  millions: { factor: 1000000, identifier: 'M', roundOff: 1 },
  hundreds: { factor: 1, identifier: '', roundOff: 0 },
};

const getLikesUnit = (count) => {
  const countLength = count.length;
  if (countLength >= 4 && countLength <= 6) {
    return 'thousands';
  }
  if (countLength >= 7 && countLength <= 9) {
    return 'millions';
  }
  return 'hundreds';
};

export const countFormatter = (Count) => {
  const count = String(Count);
  const unit = conversionMapper[getLikesUnit(count)];
  const mainSegment = parseInt((count / unit.factor).toFixed(unit.roundOff),10);
  return `${mainSegment}${unit.identifier}`;
};

export const validateEmail = (email) => {
  return String(email)
      .toLowerCase()
      .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};


