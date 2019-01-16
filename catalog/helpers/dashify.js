export function dashify(tokenName) {
  const dashified = tokenName.split(/(?=[A-Z])/).join('-').toLowerCase();
  return (
    dashified
  );
};
