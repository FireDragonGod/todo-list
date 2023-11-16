import remove from '../../assets/img/remove_FILL0_wght400_GRAD0_opsz24.svg';
import edit from '../../assets/img/edit_FILL0_wght400_GRAD0_opsz24.svg';
import { editTodoItem } from './edit_todo';
import { todoLists } from '../create_todo/todo_create';

function appendMoreChildren(
  parent, 
  child
  ) {
  child.forEach((element) => {
    parent.appendChild(element);
  });
};

class TodoItem {

  createTodoItem(
    dataTodoItem,
    colorCoding,
    title,
    dueDate,
    description,
    priorityLevel,
  ) {
    const todoItemWrapper = document.createElement('div');
    const form = document.createElement('form');
    const onles = document.createElement('ul');
    const li = document.createElement('li');
    const check = document.createElement('input');
    const checkLabel = document.createElement('label');

    const divTitle = document.createElement('div');
    const divPriority = document.createElement('div');
    const divDueDate = document.createElement('div');
    const divRemove = document.createElement('div');
    const divEdit = document.createElement('div');
    const h2 = document.createElement('h2');
    const paraDate = document.createElement('p');

    divPriority.classList.add(`${colorCoding}`);
    todoItemWrapper.setAttribute(
      'class',
      'todo-item'
    )

    let removeImg = new Image();
    let editContent = new Image();

    h2.textContent = `${title}`;
    paraDate.textContent = `${dueDate}`;

    const datesForForm = {
      dueDateMm: dueDate.slice(0, 2),
      dueDateDd: dueDate.slice(3, 5),
      dueDateYyyy: dueDate.slice(6, 10),
    };

    removeImg.setAttribute(
      'alt',
      'remove?'
    );

    editContent.setAttribute(
      'alt',
      'edit',
    );

    removeImg.src = remove;
    editContent.src = edit;
    
    todoItemWrapper.setAttribute(
      'data-todo-item', 
      `${dataTodoItem}`,
    );

    form.setAttribute(
      'method',
      'get',
    );

    form.setAttribute(
      'action',
      '',
    );

    checkLabel.setAttribute(
      'for',
      'checkList',
    );

    removeImg.addEventListener(
      'click',
      (event) => {
        todoLists.dereferTodoListsItem(dataTodoItem);
        todoItemWrapper.remove();
      }
    )

    check.addEventListener(
      'click',
      (event) => {
        event.target.checked ? h2.classList.toggle('strikethrough') : h2.classList.toggle('strikethrough');
      }
    );

    check.setAttribute(
      'type',
      'checkbox',
    );

    check.setAttribute(
      'id',
      'checkList'
    );

    check.setAttribute(
      'name',
      'checkList'
    );

    divRemove.appendChild(removeImg);
    divEdit.appendChild(editContent);

    divEdit.appendChild(editTodoItem.editTodoForm(
      dataTodoItem,
      title,
      description,
      priorityLevel,
      `${datesForForm.dueDateYyyy}-${datesForForm.dueDateMm}-${datesForForm.dueDateDd}`,
    ));

    editContent.addEventListener(
      'click',
      (event) => {
        const modal = document.querySelector(`dialog[data-todo-edit="${dataTodoItem}"]`);
        modal.showModal();
      }
    )

    form.appendChild(onles);
    onles.appendChild(li);

    appendMoreChildren(
      li, 
      [
        check,
        checkLabel,
      ]
    );

    divTitle.appendChild(h2);
    divDueDate.appendChild(paraDate)

    appendMoreChildren(
      todoItemWrapper, 
      [
        form, 
        divTitle,
        divPriority,
        divDueDate,
        divRemove,
        divEdit,
      ]
    );

    todoItemWrapper.classList.add('todo_item');

    return todoItemWrapper;
  };
};

export const todoItem = new TodoItem();

