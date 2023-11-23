const AppendWithCondition = () => {

  const appendIfConditionsWereSatisfied = (
    titleLength,
    parent, 
    preventElement,
    hideElement,
    todoListsLength,
    todoItem,
  ) => {
    'use strict';
    if (
      todoListsLength >= 1
      && titleLength >= 4
    ) {
      preventElement.preventDefault();
      hideElement.close();
      parent.appendChild(todoItem);
    }
  };

  return {
    appendIfConditionsWereSatisfied,
  };
};

export const appendWithObjectLengthCondition = AppendWithCondition();