// images
import add from '../../assets/img/add_FILL0_wght400_GRAD0_opsz24.svg';
import close from '../../assets/img/close_FILL0_wght400_GRAD0_opsz24_copy.svg';

// Application Logic
import { updateTodoValues } from '../create_todo/update_todo';
import { todoItem } from '../create_html_files/create_todo_item';

// logic 
import { appendWithObjectLengthCondition } from '../create_todo/conditional_append';
import { 
  dates, 
  colorConvert, 
  todoLists
} from '../create_todo/todo_create';

// storage
import { setTodoInLocalStorage } from '../local_storage_/local_storage_todoLists';


class ProjectOnTheMainContent {

  representProjectName(
    projectNameContent,
    dataKey,
    ) {
    const projectNameWrapper = document.createElement('div');
    const projectName = document.createElement('h1');
    const todoAddButtonToShowForm = document.createElement('button');
    const addImg = new Image();
    const todoContainer = document.createElement('div');

    addImg.src = add;

    projectNameWrapper.setAttribute(
      'data-key',
      `${dataKey}`
    );

    projectNameWrapper.setAttribute(
      'class',
      'project-main-contents'
    );

    todoAddButtonToShowForm.textContent = 'Add Todo';

    todoAddButtonToShowForm.addEventListener(
      'click',
      (event) => {
        const formWithDataKey = document.querySelector(`dialog[data-key="${dataKey}"]`);
        formWithDataKey.showModal();
      }
    );

    projectName.textContent = `${projectNameContent}`;
    projectNameWrapper.classList.add('hide');
    projectNameWrapper.appendChild(projectName);
    projectNameWrapper.appendChild(todoAddButtonToShowForm);
    projectNameWrapper.appendChild(todoContainer);
    projectNameWrapper.appendChild(this.addTodoViaForm(dataKey));
    todoAddButtonToShowForm.appendChild(addImg);

    return projectNameWrapper;
  };
  
  addTodoViaForm(dataKey) {
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');
    const ul = document.createElement('ul');

    dialog.setAttribute(
      'data-key',
      `${dataKey}`
    );

    form.setAttribute(
      'data-key',
      `${dataKey}`
    );

    const liImg = document.createElement('li');
    const closeImg = new Image();
    closeImg.src = close;
    const liTitle = document.createElement('li');
    const liDescription = document.createElement('li');
    const liPriority = document.createElement('li');
    const liDueDate = document.createElement('li');
    const liSubmit = document.createElement('li');
    const liLow = document.createElement('li');
    const liMedium = document.createElement('li');
    const liHigh = document.createElement('li');

    const labelTitle = document.createElement('label');
    const labelDescription = document.createElement('label');
    const labelDueDate = document.createElement('label');
    const labelSubmit = document.createElement('label');
    const labelLow = document.createElement('label');
    const labelMedium = document.createElement('label');
    const labelHigh = document.createElement('label');

    const title = document.createElement('input');
    const description = document.createElement('textarea');
    const priority = document.createElement('legend');
    const low = document.createElement('input');
    const medium = document.createElement('input');
    const high = document.createElement('input')
    const dueDate = document.createElement('input');
    const submit = document.createElement('button');
  
    // it's easer to read it this way
    labelTitle.textContent = 'Title: ';
    labelTitle.setAttribute(
      'for', 
      'task_name'
    );
    title.setAttribute(
      'type', 
      'text'
    );
    title.setAttribute(
      'name', 
      'task_name'
    );
    title.setAttribute(
      'id', 
      'task_name'
    );
    title.setAttribute(
      'placeholder', 
      'todo-list'
    );
    title.setAttribute(
      'minlength', 
      '4'
    );
    title.setAttribute(
      'maxlength', 
      '60'
    );
    title.setAttribute(
      'required', 
      ''
    );

    labelDescription.textContent = 'Description: '
    labelDescription.setAttribute(
      'for', 
      'task_description'
    );
    description.setAttribute(
      'type', 
      'text'
    );
    description.setAttribute(
      'name', 
      'task_description'
    );
    description.setAttribute(
      'minlength', 
      ''
    );
    description.setAttribute(
      'maxlength', 
      '120'
    );
    description.setAttribute(
      'id', 
      'task_description'
    );
    description.setAttribute(
      'placeholder', 
      'Provide more info about the task')

    priority.textContent = 'Priority Level: ';

    labelLow.textContent = 'Low Priority'
    labelLow.setAttribute(
      'for', 
      'low_priority'
    );
    low.setAttribute(
      'type', 
      'radio'
    );
    low.setAttribute(
      'id', 
      'low_priority'
    );
    low.setAttribute(
      'name', 
      'priority_level'
    );
    low.setAttribute(
      'value', 
      'low_priority'
    );
    low.setAttribute(
      'checked', 
      ''
    );

    labelMedium.textContent = 'Medium Priority';
    labelMedium.setAttribute(
      'for', 
      'medium_priority'
    );
    medium.setAttribute(
      'type', 
      'radio'
    );
    medium.setAttribute(
      'id', 
      'medium_priority'
    );
    medium.setAttribute(
      'name', 
      'priority_level'
    );
    medium.setAttribute(
      'value', 
      'medium_priority'
    );

    labelHigh.textContent = 'High Priority';
    labelHigh.setAttribute(
      'for', 
      'high_priority'
    );
    high.setAttribute(
      'type', 
      'radio'
    );
    high.setAttribute(
      'id', 
      'high_priority'
    );
    high.setAttribute(
      'name', 
      'priority_level'
    );
    high.setAttribute(
      'value', 
      'high_priority'
    );
    
    labelDueDate.textContent = 'Due Date: ';
    labelDueDate.setAttribute(
      'for', 
      'due_date'
    );
    dueDate.setAttribute(
      'type', 
      'date'
    );
    dueDate.setAttribute(
      'name', 
      'due_date'
    );
    dueDate.setAttribute(
      'id', 
      'due_date'
    );
    dueDate.setAttribute(
      'min', ``
    );
    dueDate.setAttribute(
      'max', 
      '2100-12-31'
    );
    dueDate.setAttribute(
      'value', `2023-11-06`
    );

    labelSubmit.setAttribute(
      'for', 
      'submit_todo'
    );
    submit.textContent = 'Submit'
    submit.setAttribute(
      'id', 
      'submit_todo'
    );
    submit.setAttribute(
      'name', 
      'submit_todo'
    );
    submit.setAttribute(
      'type', 
      'submit'
    );

    let priorityLevelStore = 'low_priority';

    [
      low,
      medium,
      high
    ].forEach((element) => {
    
      element.addEventListener(
        'change',
        (event) => {
          priorityLevelStore = event.target.value;
        }
      )
    })

    // create todo via submit form
    submit.addEventListener(
      'click',
      (event) => {
        event.preventDefault();
        const justBelowTheButton = document.querySelector(`div[data-key="${dataKey}"] > div`);
        const todoListLength = todoLists.getTodoListsLength();

        todoLists.addTodoLists(
          title.value,
          description.value,
          priorityLevelStore,
          dueDate.value !== '' ?  dueDate.value : '2023-11-06',
          todoListLength,
          dataKey,
        );

        const todoListsProperty = todoLists.getTodoListsItem(-1);
        const countValue = todoListsProperty.index;
        const titleValue = todoListsProperty.title;
        const descriptionValue = todoListsProperty.description;
        const priorityValue = todoListsProperty.priority;
        const dueDateValue = todoListsProperty.dueDate;
        const projectThisTodoWasCreated = todoListsProperty.ProjectThisTodoIsCreated;
        const colorBasedPriority = colorConvert.priorityConvert(priorityValue);
        const formattedDate = dates.formatDate(dueDateValue);

        appendWithObjectLengthCondition.appendIfConditionsWereSatisfied(
          title.value.length,
          justBelowTheButton,
          event, 
          dialog, 
          todoLists.getTodoListsLength(),
          todoItem.createTodoItem( 
            countValue,
            colorBasedPriority,
            titleValue,
            formattedDate,
            descriptionValue,
            priorityValue,
            projectThisTodoWasCreated,
          ),
        );

        // Add priorityclassListItem so when checking the radio button it doesn't affect the color priority that toggles the default on submition
        updateTodoValues.addPriorityClassListsItem(priorityLevelStore);

        // ? Reset all input values on submit
        title.value = '';
        description.value = '';
        priorityLevelStore = 'low_priority';
        dueDate.value = '2023-11-06';
        
        const radios = [
          medium,
          high,
        ];

        radios.forEach((
          element,
          ) => {
            element.checked = 0;
          }
        );
        
        // default radio checked 
        low.checked = 1;
        // reset input ends here

        setTodoInLocalStorage.settingTodoInLocalStorage(todoLists.revealTodoLists());
      }
    );

    dialog.appendChild(form);
    form.appendChild(ul);
    liImg.appendChild(closeImg);

    closeImg.addEventListener(
      'click',
      (event) => {
        const form = document.querySelector(`dialog[data-key='${dataKey}']`);
        form.close();
      }
    );
    
    function appendMultipleChildren(
      parent, 
      children
    ) {
      children.forEach(child => {
        parent.appendChild(child)
      })
    };
    
    appendMultipleChildren(
      ul, 
      [
        liImg,
        liTitle,
        liDescription,
        liPriority,
        liLow,
        liMedium,
        liHigh,
        liDueDate,
        liSubmit,
      ]
    );

    appendMultipleChildren(
      liTitle, 
      [
        labelTitle, 
        title
      ]
    );
    appendMultipleChildren(
      liDescription, 
      [
        labelDescription, 
        description
      ]
    );
    
    appendMultipleChildren(
      liDueDate, 
      [
        labelDueDate, 
        dueDate
      ]
    );
    
    appendMultipleChildren(
      liPriority, 
      [priority],
    );
    appendMultipleChildren(
      liLow, [
        low,
        labelLow
      ]
    );
    appendMultipleChildren(
      liMedium,
      [
        medium,
        labelMedium,
      ]
    );
    appendMultipleChildren(
      liHigh,
      [
        high,
        labelHigh, 
      ]
    );

    appendMultipleChildren(
      liSubmit, 
      [
        labelSubmit, 
        submit
      ]
    );
    return dialog;
  };
};

export const mainContent = new ProjectOnTheMainContent();