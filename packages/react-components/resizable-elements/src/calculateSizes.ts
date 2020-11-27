const calculateSizes = (
  sizePercentages: number[],
  collapsedFirstElement: boolean,
  collapsedLastElement: boolean,
  minSize: number,
): string[] => {
  const nbChildren = sizePercentages.length;
  const splitterCorrection = ((nbChildren - 1) * 5) / nbChildren;

  return sizePercentages.map((sizePercentage, index) => {
    let sizePerc = sizePercentage;
    let sizePx = 0;
    const collapsed =
      (index === 0 && collapsedFirstElement) ||
      (index === nbChildren - 1 && collapsedLastElement);

    // collapsed panels are minSize
    if (collapsed) {
      return `${minSize - splitterCorrection}px`;
    }

    if (index === 1 && collapsedFirstElement) {
      sizePerc += sizePercentages[0];
      sizePx -= minSize;
    }

    if (index === nbChildren - 2 && collapsedLastElement) {
      sizePerc += sizePercentages[index + 1];
      sizePx -= minSize;
    }

    return `calc(${sizePerc}% + ${sizePx - splitterCorrection}px)`;
  });
};

export default calculateSizes;
