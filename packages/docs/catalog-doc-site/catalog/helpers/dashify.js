const dashify = tokenName =>
  tokenName
    .split(/(?=[A-Z0-9])/)
    .join('-')
    .toLowerCase();

export default dashify;
