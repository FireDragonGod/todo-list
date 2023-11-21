const  AppendingChildrenWithConditional = () => {

  const projectOnAside = (
    parent,
    objectLength,
    inputValue,
    obj
  ) => {
    let minimumInputValueLength = inputValue.value.length;

    if (
      objectLength >= 1
      && minimumInputValueLength >= 4
    ) {
      parent.appendChild(obj)
    };
  };

  const projectContent = (
    parent,
    object,
    valueLength,
  ) => {
    if (valueLength >= 4) {
      return parent.appendChild(object)
    }
  };

  return {
    projectOnAside,
    projectContent,
  }
};

export const conditionAppending = AppendingChildrenWithConditional();
