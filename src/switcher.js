
export class Switcher {
  switchImage(
    currentClass,
    current,
    value,
    noValue,
    close,
    open
  ) {
    if (currentClass === value) {
      current.src = close;
    }
    if (currentClass === noValue) {
      current.src = open;
    }
  };
};
