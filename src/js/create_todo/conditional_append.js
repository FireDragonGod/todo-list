import { todoItem } from '../create_html_files/create_todo_item';
import { todoList, todos } from '../create_todo/todo_create';
import { elementPreventdefault } from '../create_html_files/form_aside';

const ParentAndChildren = {  
  
  appendChildren(
    parent,
    children,
  ) {
    parent.appendChild(children);
  },

  hideParentElement(element) {
    element.close();
  },
};

class AppendWithCondition {

  appendIfConditionWereSatisfied = function appendChildrenWithThePropertiesFromTodoList(
    titleLength,
    parent, 
    preventElement,
    hideElement,
  ) {
    if (
      todoList.length >= 1
      && titleLength >= 4
      ) {
      elementPreventdefault(preventElement);
      ParentAndChildren.hideParentElement(hideElement);

      const lastItemTodoList = todoList.length - 1;
      const countValue = todoList[lastItemTodoList].count;
      const titleValue = todoList[lastItemTodoList].title;
      const priorityValue = todoList[lastItemTodoList].priority;
      const dueDateValue = todoList[lastItemTodoList].dueDate;
      const descriptionValue = todoList[lastItemTodoList].description;
      const colorBasedPriority = todos.prioritize(priorityValue);
      const formattedDate = todos.formatDate(dueDateValue);

      ParentAndChildren.appendChildren(
        parent,
        todoItem.createTodoItem(
          countValue,
          colorBasedPriority,
          titleValue,
          formattedDate,
          descriptionValue,
          priorityValue,
        ),
      );
    }
  };

};

export const appendWithObjectLengthCondition = new AppendWithCondition();