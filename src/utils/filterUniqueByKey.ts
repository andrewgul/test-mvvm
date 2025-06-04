export const filterUniqueByKey = <T extends object>(
  array: T[],
  key: keyof T
) => {
  return array.reduce<T[]>((acc, current) => {
    if (!acc.some((country) => country[key] === current[key])) {
      acc.push(current);
    }

    return acc;
  }, []);
};
