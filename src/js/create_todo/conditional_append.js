import { todoItem } from '../create_html_files/create_todo_item';
import { todoLists } from '../create_todo/todo_create';
import { colorConvert } from '../create_todo/todo_create';
import { dates } from '../create_todo/todo_create'

const AppendWithCondition = () => {

  const appendIfConditionsWereSatisfied = function appendChildrenWithThePropertiesFromTodoList(
    titleLength,
    parent, 
    preventElement,
    hideElement,
  ) {
    'use strict';
    if (
      todoLists.getTodoListsLength() >= 1
      && titleLength >= 4
    ) {
      preventElement.preventDefault();
      hideElement.close();

      const todoListsProperty = todoLists.getTodoListsItem(-1);

      const countValue = todoListsProperty.index;
      const titleValue = todoListsProperty.title;
      const descriptionValue = todoListsProperty.description;
      const priorityValue = todoListsProperty.priority;
      const dueDateValue = todoListsProperty.dueDate;

      const colorBasedPriority = colorConvert.priorityConvert(priorityValue)
      const formattedDate = dates.formatDate(dueDateValue);

      parent.appendChild(todoItem.createTodoItem(
        countValue,
        colorBasedPriority,
        titleValue,
        formattedDate,
        descriptionValue,
        priorityValue,
      ));
    }
  };

  return {
    appendIfConditionsWereSatisfied,
  }

};

export const appendWithObjectLengthCondition = AppendWithCondition();