type TimeoutId = ReturnType<typeof setTimeout>;

export const debounce = <F extends (...args: any[]) => void>(
  func: F,
  timeout = 300
) => {
  let timeoutId: null | TimeoutId = null;

  return (...args: Parameters<F>): TimeoutId => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);

      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    }, timeout);

    return timeoutId;
  };
};
