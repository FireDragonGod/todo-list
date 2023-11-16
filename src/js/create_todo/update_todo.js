import { todoLists, dates, matchValue, colorConvert } from "./todo_create";

const TodoValue = () => {
  'use strict';
  const todoValueSet = (title, description, priority, dueDate, index ) => {
    if (title.length >= 4) {
      const todoListsSet = todoLists.getTodoListsItem(index);
      todoListsSet.title = title;
      todoListsSet.description = description;
      todoListsSet.priority = priority;
      todoListsSet.dueDate = dueDate;
    };
  };

  return {
    todoValueSet,
  };
};

export const todoValue = TodoValue();

const UpdateTodoValues  = () => {
  'use strict';

  const priorityclassListValues = [];

  const radioInputType = (
    lowInputRadio,
    mediumInputRadio,
    highInputRadio,
    priorityValue
  ) => {
    lowInputRadio.checked = matchValue.match('low_priority', priorityValue);
    mediumInputRadio.checked = matchValue.match('medium_priority', priorityValue);
    highInputRadio.checked = matchValue.match('high_priority', priorityValue)
  }

  const textInputType = (
    titleInputValue,
    descriptionInputValue,
    dueDateInputValue,
    titleValue,
    descriptionValue,
    dueDateValue,
  ) => {
    titleInputValue = titleValue;
    descriptionInputValue = descriptionValue;
    dueDateInputValue = dueDateValue;
  };

  const colorPriority = (
    lastTodoItemPriorityColor,
    secondToTheLastTodoItemPriorityColor,
    elementToChangePriorityColor,
  ) => {
    elementToChangePriorityColor.classList.toggle(`${lastTodoItemPriorityColor}`);
    elementToChangePriorityColor.classList.toggle(`${secondToTheLastTodoItemPriorityColor}`);
  };

  const textContentForTodoItem = (
    elementToChangeTitle,
    elementToChangeDueDate,
    titleValue,
    formattedDate,
  ) => {
    elementToChangeTitle.textContent = `${titleValue}`;
    elementToChangeDueDate.textContent = `${formattedDate}`;
  };

  const conditionValues = (
    event,
    title,
    dataKey,
    priorityLevelStore,
    elementToChangeTitle,
    elementToChangePriorityColor,
    elementToChangeDueDate,
    elementToCloseModal,
    inputToChangeTitle,
    inputToChangeDescription,
    inputLowRadio,
    inputMediumRadio,
    inputHighRadio,
    inputToChangeDueDate,
  ) => {
    priorityclassListValues.push(priorityLevelStore);

    if (title.length >= 4) {
      event.preventDefault();

      const todoItem = todoLists.getTodoListsItem(dataKey);

      const todoItemTitle = todoItem.title;
      const todoItemDescription = todoItem.description;
      const todoItemPriority = todoItem.priority;   
      const todoItemDueDate = todoItem.dueDate; 

      const formattedTodoItemDueDate = dates.formatDate(todoItemDueDate);

      const lastTodoItemPriorityColor = colorConvert.priorityConvert(priorityclassListValues.slice(-1).toString());
      const secondToTheLastTodoItemPriorityColor = colorConvert.priorityConvert(priorityclassListValues.slice(-2).reverse().slice(-1).toString());

      textContentForTodoItem(
        elementToChangeTitle,
        elementToChangeDueDate,
        todoItemTitle,
        formattedTodoItemDueDate
      );

      colorPriority(
        lastTodoItemPriorityColor,
        secondToTheLastTodoItemPriorityColor,
        elementToChangePriorityColor,
      );

      textInputType(
        inputToChangeTitle,
        inputToChangeDescription,
        inputToChangeDueDate,
        todoItemTitle,
        todoItemDescription,
        todoItemDueDate,
      );

      radioInputType(
        inputLowRadio,
        inputMediumRadio,
        inputHighRadio,
        todoItemPriority,
      );

      elementToCloseModal.close();
    }
  };

  const getPriorityClasListsItem = (index) => {
    return priorityclassListValues.at(index);
  };

  const addPriorityClassListsItem = (item) => {
    return priorityclassListValues.push(item);
  };

  return {
    conditionValues,
    getPriorityClasListsItem,
    addPriorityClassListsItem,
  };
};


export const updateTodoValues = UpdateTodoValues();