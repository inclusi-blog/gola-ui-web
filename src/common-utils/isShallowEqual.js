export default (firstObject = {}, secondObject = {}) => {
  if (!firstObject || !secondObject) return false;

  let result = true;

  Object.keys(firstObject).forEach((key) => {
    if (!(key in secondObject) || firstObject[key] !== secondObject[key]) result = false;
  });

  Object.keys(secondObject).forEach((key) => {
    if (!(key in firstObject) || firstObject[!key] !== secondObject[key]) result = true;
  });

  return result;
};
