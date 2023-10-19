import { count, projectArr } from './js/create_project';
import { formf } from './js/form_aside';
import { conditionAppending } from './js/AppendingChildrenWithConditional';
import './assets/style.css';

const addProjectButton = document.querySelector('.add_project');
const form = document.querySelector('.formList');

addProjectButton.addEventListener(
  'click',
  (event) => {
    const eventClasList = event.target.classList.value;
    formf.formToggling(
      event,
      eventClasList,
      undefined,
      addProjectButton,
      form,
    );
  }
);

const cancel = document.querySelector('.cancel');

cancel.addEventListener(
  'click',
  (event) => {

    const input = document.querySelector('input#project_name');

    const eventClasList = event.target.classList.value;

    formf.formToggling(
      event,
      eventClasList,
      undefined,
      addProjectButton,
      form,
    );
    input.value = '';
  }
);

const save = document.querySelector('.save');

save.addEventListener(
  'click',
  
  (event) => {

    const input = document.querySelector('input#project_name');
    const projects = document.querySelector('.projects');
    const inputLength = input.value.length;
    const eventClasList = event.target.classList.value;

    formf.formToggling(
      event,
      eventClasList,
      inputLength,
      addProjectButton,
      form,
    );

    formf.formInputSave(
      input.value,
      count(),
      inputLength
    );

    conditionAppending.appendding(
      projects,
      projectArr,
      input
    )

    input.value = '';
  }
);

