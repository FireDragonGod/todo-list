// images
import close from '../../assets/img/close_FILL0_wght400_GRAD0_opsz24_copy.svg';

// logic
import { updatingTodoValues, todoValue } from '../create_todo/update_todo';
import { matchValue } from '../create_todo/todo_create';

class EditTodo {

  editTodoForm = function createAnElementThatPopUpWhenClickingEditImage(
    dataKey,
    title,
    description,
    priority,
    dueDate,
  ) {
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');
    const ul = document.createElement('ul');

    const liImg = document.createElement('li');
    const liTitle = document.createElement('li');
    const liDescription = document.createElement('li');
    const liPriority = document.createElement('li');
    const liDueDate = document.createElement('li');
    const liLow = document.createElement('li');
    const liMedium = document.createElement('li');
    const liHigh = document.createElement('li');
    const liSubmit = document.createElement('li');

    const labelTitle = document.createElement('label');
    const labelDescription = document.createElement('label');
    const labelDueDate = document.createElement('label');
    const labelSubmit = document.createElement('label');
    const labelLow = document.createElement('label');
    const labelMedium = document.createElement('label');
    const labelHigh = document.createElement('label');

    const titleInput = document.createElement('input');
    const descriptionInput = document.createElement('textarea');
    const priorityInput = document.createElement('legend');
    const lowInput = document.createElement('input');
    const mediumInput = document.createElement('input');
    const highInput = document.createElement('input')
    const dueDateInput = document.createElement('input');
    const submitInput = document.createElement('button');

    const closeImg = new Image();
    closeImg.src = close;
  
    labelTitle.textContent = 'Title: ';
    labelTitle.setAttribute(
      'for', 
      'task_name'
    );
    titleInput.setAttribute(
      'type', 
      'text'
    );
    titleInput.setAttribute(
      'name', 
      'task_name'
    );
    titleInput.setAttribute(
      'id', 
      'task_name'
    );
    titleInput.setAttribute(
      'placeholder', 
      'todo-list'
    );
    titleInput.setAttribute(
      'minlength', 
      '4'
    );
    titleInput.setAttribute(
      'maxlength', 
      '64'
    );
    titleInput.setAttribute(
      'required', 
      ''
    );
    titleInput.setAttribute(
      'value', 
      `${title}`
    );

    labelDescription.textContent = 'Description: '
    labelDescription.setAttribute(
      'for', 
      'task_description'
    );
    descriptionInput.setAttribute(
      'type', 
      'text'
    );
    descriptionInput.setAttribute(
      'name', 
      'task_description'
    );
    descriptionInput.setAttribute(
      'minlength', 
      ''
    );
    descriptionInput.setAttribute(
      'maxlength', 
      '248'
    );
    descriptionInput.setAttribute(
      'id', 
      'task_description'
    );
    descriptionInput.setAttribute(
      'placeholder', 
      'Provide more info about the task'
    );

    descriptionInput.value = `${description}`;

    priorityInput.textContent = 'Priority Level: ';

    labelLow.textContent = 'Low Priority'
    labelLow.setAttribute(
      'for', 
      'low_priority'
    );
    lowInput.setAttribute(
      'type', 
      'radio'
    );
    lowInput.setAttribute(
      'id', 
      'low_priority'
    );
    lowInput.setAttribute(
      'name', 
      'priority_level'
    );
    lowInput.setAttribute(
      'value', 
      'low_priority'
    );

    labelMedium.textContent = 'Medium Priority';
    labelMedium.setAttribute(
      'for', 
      'medium_priority'
    );
    mediumInput.setAttribute(
      'type', 
      'radio'
    );
    mediumInput.setAttribute(
      'id', 
      'medium_priority'
    );
    mediumInput.setAttribute(
      'name', 
      'priority_level'
    );
    mediumInput.setAttribute(
      'value', 
      'medium_priority'
    );

    labelHigh.textContent = 'High Priority';
    labelHigh.setAttribute(
      'for', 
      'high_priority'
    );
    highInput.setAttribute(
      'type', 
      'radio'
    );
    highInput.setAttribute(
      'id', 
      'high_priority'
    );
    highInput.setAttribute(
      'name', 
      'priority_level'
    );
    highInput.setAttribute(
      'value', 
      'high_priority'
    );

    labelDueDate.textContent = 'Due Date: ';
    labelDueDate.setAttribute(
      'for', 
      'due_date'
    );
    dueDateInput.setAttribute(
      'type', 
      'date'
    );
    dueDateInput.setAttribute(
      'name', 
      'due_date'
    );
    dueDateInput.setAttribute(
      'id', 
      'due_date'
    );
    dueDateInput.setAttribute(
      'min', ``
    );
    dueDateInput.setAttribute(
      'max', 
      '2100-12-31'
    );
    dueDateInput.setAttribute(
      'value', 
      `${dueDate}`
    );

    submitInput.textContent = 'Change'
    labelSubmit.setAttribute(
      'for', 
      'submit_todo'
    );
    submitInput.setAttribute(
      'id', 
      'submit_todo'
    );
    submitInput.setAttribute(
      'name', 
      'submit_todo'
    );
    submitInput.setAttribute(
      'type', 
      'submit'
    );

    lowInput.checked = matchValue.match(
      'low_priority', 
      priority,
    );
    mediumInput.checked = matchValue.match(
      'medium_priority', 
      priority,
    );
    highInput.checked = matchValue.match(
      'high_priority', 
      priority
    );

    let priorityLevelStore = `${priority}`;

    const radios = [
      lowInput,
      mediumInput,
      highInput,
    ];

    radios.forEach((element) => {
    
      element.addEventListener('change', (event) => {
        priorityLevelStore = event.target.value;
      })
    });

    submitInput.addEventListener('click', (event) => {

      const todoItemTitle = document.querySelector(`div[data-todo-item='${dataKey}'] > div:nth-child(2) > h2`);
      const todoItemPriorityColor = document.querySelector(`div[data-todo-item='${dataKey}'] > div:nth-child(3)`);
      const todoItemDueDate = document.querySelector(`div[data-todo-item='${dataKey}'] > div:nth-child(4) > p`);
      const titleInputValue = titleInput.value;
      const descriptionInputValue = descriptionInput.value;
      const lowInputRadio = lowInput;
      const mediumInputRadio = mediumInput;
      const highInputRadio = highInput;
      const dueDateInputValue = dueDateInput.value;

      todoValue.todoValueSet(
        titleInputValue,
        descriptionInputValue,
        priorityLevelStore,
        dueDateInputValue,
        dataKey,
      );

      updatingTodoValues.conditionValuesBeforeMakingChangesToThem(
        event,
        titleInputValue,
        dataKey,
        priorityLevelStore,
        todoItemTitle,
        todoItemPriorityColor,
        todoItemDueDate,
        dialog,
        titleInputValue,
        descriptionInputValue,
        lowInputRadio,
        mediumInputRadio,
        highInputRadio,
        dueDateInputValue,
      );

    });

    form.setAttribute(
      'data-todo-edit',
      `${dataKey}`,
    );
    
    dialog.setAttribute(
      'data-todo-edit',
      `${dataKey}`,
    );

    dialog.appendChild(form);
    form.appendChild(ul);
    liImg.appendChild(closeImg);
    
    function appendMultipleChildren(
      parent, 
      children
    ) {
      children.forEach((child) => {
        parent.appendChild(child)
      })
    };

    closeImg.addEventListener('click', () => {
      dialog.close();
    });
    
    appendMultipleChildren(ul, [
      liImg,
      liTitle,
      liDescription,
      liPriority,
      liLow,
      liMedium,
      liHigh,
      liDueDate,
      liSubmit,
    ]);

    appendMultipleChildren(liTitle, [
      labelTitle, 
      titleInput,
    ]);
    
    appendMultipleChildren(liDescription, [
      labelDescription, 
      descriptionInput,
    ]);
    
    appendMultipleChildren(liDueDate, [
      labelDueDate, 
      dueDateInput,
    ]);
    
    appendMultipleChildren(liPriority, [
      priorityInput
    ]);
    appendMultipleChildren(liLow, [
      lowInput, 
      labelLow,
    ]);
    appendMultipleChildren(liMedium, [
      mediumInput, 
      labelMedium, 
    ])
    appendMultipleChildren(liHigh, [
      highInput, 
      labelHigh, 
    ])

    appendMultipleChildren(liSubmit, [
      labelSubmit, 
      submitInput,
    ]);
    
    return dialog;
  };
};

export const editTodoItem = new EditTodo();