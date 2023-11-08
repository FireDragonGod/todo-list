import { todoItem } from "../create_html_files/create_todo_item";
import { todos, todoList } from "./todo_create";

// * export priorityClassListValues for adding Todo priority level to toggle when editing todo Items

export const priorityclassListValues = [];

class ChangeTodoValues {

  editHtmlTodoInputItems(
    titleInputValue,
    descriptionInputValue,
    lowInputRadio,
    mediumInputRadio,
    highInputRadio,
    dueDateInputValue,
    titleValue,
    descriptionValue,
    priorityValue,
    dueDateValue,
  ) {
    titleInputValue = titleValue;
    descriptionInputValue = descriptionValue;
    lowInputRadio.checked = todos.checkPriority('low_priority', priorityValue);
    mediumInputRadio.checked = todos.checkPriority('medium_priority', priorityValue);
    highInputRadio.checked = todos.checkPriority('high_priority', priorityValue)
    dueDateInputValue = dueDateValue;
  };

  editHtmlTodoItems = function changeTheTextContentsThenToggleThePriorityClassList(
    elementToChangeTitle,
    elementToChangePriorityColor,
    elementToChangeDueDate,
    titleValue,
    formattedDate,
    lastTodoItemPriorityColor,
    secondToTheLastTodoItemPriorityColor,
    elementToCloseModal,
  ) {
    elementToChangeTitle.textContent = titleValue;
    elementToChangeDueDate.textContent = formattedDate;
    elementToChangePriorityColor.classList.toggle(`${lastTodoItemPriorityColor}`);
    elementToChangePriorityColor.classList.toggle(`${secondToTheLastTodoItemPriorityColor}`);
    elementToCloseModal.close();
  };

  conditionValues = function getTheLengthOfTitleToGetValuesFromTheEditedTodoItemsThenUseEditHtmlTodoItemsToChangeTheFollowingItems(
    event,
    title,
    dataKey,
    priorityLevelStore,
    elementToChangeTitle,
    elementToChangePriorityColor,
    elementToChangeDueDate,
    elementToCloseModal,
    titleInputValue,
    descriptionInputValue,
    lowInputRadio,
    mediumInputRadio,
    highInputRadio,
    dueDateInputValue,
  ) {
    priorityclassListValues.push(priorityLevelStore);

    if (title.length >= 4) {
      event.preventDefault();

      const todoItemTitle = todoList[dataKey].title;
      const todoItemDescription = todoList[dataKey].description;
      const todoItemPriority = todoList[dataKey].priority;   
      const todoItemDueDate = todoList[dataKey].dueDate; 

      const formattedTodoItemDueDate = todos.formatDate(todoItemDueDate);
      const lastTodoItemPriorityColor = todos.prioritize(priorityclassListValues.slice(-1).toString());
      const secondToTheLastTodoItemPriorityColor = todos.prioritize(priorityclassListValues.slice(-2).reverse().slice(-1).toString());
      
      console.log(
        todoItemTitle,
        todoItemDescription,
        todoItemPriority,
        todoItemDueDate 
      )
      this.editHtmlTodoItems(
        elementToChangeTitle,
        elementToChangePriorityColor,
        elementToChangeDueDate,
        todoItemTitle,
        formattedTodoItemDueDate,
        lastTodoItemPriorityColor,
        secondToTheLastTodoItemPriorityColor,
        elementToCloseModal,
      );

      this.editHtmlTodoInputItems(
        titleInputValue,
        descriptionInputValue,
        lowInputRadio,
        mediumInputRadio,
        highInputRadio,
        dueDateInputValue,
        todoItem,
        todoItemDescription,
        todoItemPriority,
        todoItemDueDate,
      );

    }
  };

};

export const changeTodoValues = new ChangeTodoValues();