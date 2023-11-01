import { todoItem } from '../create_html_files/create_todo_item';
import { todoList, todos } from '../create_todo/todo_create';
import { elementPreventdefault } from '../create_html_files/form_aside';

class ParentAndChildren {

  static appendChildren(
    parent,
    children,
  ) {
    parent.appendChild(children);
  };

  static hideParentElement(element) {
    element.classList.toggle('hide');
  };
};

class AppendWithCondition {

  appendIfConditionWereSatisfied(
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

      const countValue = todoList.slice(-1)[0].count;
      const titleValue = todoList.slice(-1)[0].title;
      const priorityValue = todoList.slice(-1)[0].priority;
      const dueDateValue = todoList.slice(-1)[0].dueDate;

      const colorBasedPriority = todos.prioritize(priorityValue);
      const formattedDate = todos.formatDate(dueDateValue);

      ParentAndChildren.appendChildren(
        parent,
        todoItem.createTodoItem(
          countValue,
          colorBasedPriority,
          titleValue,
          formattedDate,
        ),
      );
    }
  };
};

export const appendWithObjectLengthCondition = new AppendWithCondition();