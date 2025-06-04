export const isValidNumber = (value: unknown): boolean => {
  return !Number.isNaN(Number(value));
};
