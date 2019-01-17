export function dashify(tokenName) {
  return (
    tokenName.split(/(?=[A-Z])/).join('-').toLowerCase()
  );
};