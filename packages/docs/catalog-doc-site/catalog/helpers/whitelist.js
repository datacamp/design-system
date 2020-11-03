const whitelist = (blacklist, obj) => {
  const newObj = obj;
  blacklist.forEach((item) => delete newObj[item]);
  return newObj;
};

export default whitelist;
