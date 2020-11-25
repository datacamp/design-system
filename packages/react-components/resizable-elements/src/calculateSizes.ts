import FixedLengthArray from './FixedLengthArray';

const calculateSizes = <L extends number>(
  sizePercentages: FixedLengthArray<number, L>,
  collapsedFirstElement: boolean,
  collapsedLastElement: boolean,
  minSize: number,
): FixedLengthArray<string, L> => {
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
