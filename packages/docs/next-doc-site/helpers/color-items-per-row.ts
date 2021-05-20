function colorItemsPerRow(
  numberOfColors: number,
  currentItemIndex: number,
  maxItemsPerRow: number,
): number {
  const numberOfColorsInFirstRow = numberOfColors % maxItemsPerRow;
  return currentItemIndex < numberOfColorsInFirstRow
    ? numberOfColorsInFirstRow
    : maxItemsPerRow;
}

export default colorItemsPerRow;
