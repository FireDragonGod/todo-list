import remove from '../../assets/remove_FILL0_wght400_GRAD0_opsz24.svg';
import expandContent from '../../assets/expand_content_FILL0_wght400_GRAD0_opsz24.svg';
import edit from '../../assets/edit_FILL0_wght400_GRAD0_opsz24.svg';

function appendMoreChildren(
  parent, 
  child
  ) {
  child.forEach((element) => {
    parent.appendChild(element);
  });
}

class TodoItem {

  createTodoItem(
    dataTodoItem,
    colorCoding,
    title,
    dueDate,
  ) {
    const todoItemWrapper = document.createElement('div');
    const form = document.createElement('form');
    const onles = document.createElement('ul');
    const li = document.createElement('li');
    const check = document.createElement('input');
    const checkLabel = document.createElement('label');

    const divTitle = document.createElement('div');
    const divDueDate = document.createElement('div');
    const divRemove = document.createElement('div');
    const divExpand = document.createElement('div');
    const divEdit = document.createElement('div');
    const h2 = document.createElement('h2');
    const paraDate = document.createElement('p');

    todoItemWrapper.classList.add(`${colorCoding}`);

    let removeImg = new Image();
    let expandContentImg = new Image();
    let editContent = new Image();

    h2.textContent = `${title}`;
    paraDate.textContent = `${dueDate}`;

    removeImg.setAttribute(
      'alt',
      'remove?'
    );

    expandContentImg.setAttribute(
      'alt',
      'expand content'
    );

    editContent.setAttribute(
      'alt',
      'edit',
    );

    removeImg.src = remove;
    expandContentImg.src = expandContent;
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
    )

    check.setAttribute(
      'type',
      'checkbox',
    )

    check.setAttribute(
      'id',
      'checkList'
    );

    check.setAttribute(
      'name',
      'checkList'
    );

    divRemove.appendChild(removeImg);
    divExpand.appendChild(expandContentImg);
    divEdit.appendChild(editContent);

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
        divDueDate,
        divRemove,
        divExpand,
        divEdit,
      ]
    );

    todoItemWrapper.classList.add('todo_item');

    return todoItemWrapper;
  };
};

export const todoItem = new TodoItem();

