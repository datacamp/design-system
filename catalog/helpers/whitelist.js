const whitelist = (blacklist, obj) => {
  blacklist.forEach(item => delete obj[item]);
  return obj;
}

export default whitelist;