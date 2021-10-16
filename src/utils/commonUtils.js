const conversionMapper = {
  thousands: { factor: 1000, identifier: 'K', roundOff: 1 },
  millions: { factor: 1000000, identifier: 'M', roundOff: 1 },
  hundreds: { factor: 1, identifier: '', roundOff: 0 },
};

const getLikesUnit = (likes) => {
  const likesLength = likes.length;
  if (likesLength >= 4 && likesLength <= 6) {
    return 'thousands';
  }
  if (likesLength >= 7 && likesLength <= 9) {
    return 'millions';
  }
  return 'hundreds';
};

const convertPostLikesCount = (likesCount) => {
  const count = String(likesCount);
  const unit = conversionMapper[getLikesUnit(count)];
  const mainSegment = parseInt((count / unit.factor).toFixed(unit.roundOff));
  return `${mainSegment}${unit.identifier}`;
};

export default convertPostLikesCount;
