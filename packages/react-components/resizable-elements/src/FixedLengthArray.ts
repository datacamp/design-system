export default interface FixedLengthArray<T extends any, L extends number>
  extends Array<T> {
  0: T;
  length: L;
  map<X extends any>(
    callback: (value: T, index: number, array: T[]) => X,
  ): FixedLengthArray<X, L>;
}
