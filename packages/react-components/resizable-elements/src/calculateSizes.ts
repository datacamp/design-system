const calculateSizes = (
  sizePercentages: number[],
  collapsedFirstElement: boolean,
  collapsedLastElement: boolean,
  collapsedSize: number,
): string[] => {
  const nbChildren = sizePercentages.length;
  const splitterCorrection = ((nbChildren - 1) * 5) / nbChildren;

  return sizePercentages.map((sizePercentage, index) => {
    let sizePerc = sizePercentage;
    let sizePx = 0;
    const collapsed =
      (index === 0 && collapsedFirstElement) ||
      (index === nbChildren - 1 && collapsedLastElement);

    // collapsed panels are collapsedSize
    if (collapsed) {
      return `${collapsedSize - splitterCorrection}px`;
    }

    if (index === 1 && collapsedFirstElement) {
      sizePerc += sizePercentages[0];
      sizePx -= collapsedSize;
    }

    if (index === nbChildren - 2 && collapsedLastElement) {
      sizePerc += sizePercentages[index + 1];
      sizePx -= collapsedSize;
    }

    return `calc(${sizePerc}% + ${sizePx - splitterCorrection}px)`;
  });
};

export default calculateSizes;
