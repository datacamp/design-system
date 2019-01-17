export function dashify(tokenName) {
  return (
    tokenName.split(/(?=[A-Z0-9])/).join('-').toLowerCase()
  );
};