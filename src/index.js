import './assets/css/style.css';
import { formf } from './js/create_project/Form';
import { htmlElement } from './js/create_project/pusher';
import { projectLists } from './js/create_project/create_project';
import { conditionAppending } from './js/create_project/conditional_append';

import { today } from './js/create_html_files/today';
import { thisWeek } from './js/create_html_files/this_week';
import { mainContent } from './js/create_html_files/todo_with_form';
import { blankContent } from './js/create_html_files/blank';
import { localStorageProjects } from './js/local_storage_/local_storage_projects';

// time used on copyright c then year
const fullYear = new Date().getFullYear();
const aCopyRigh = document.querySelector('a[data-copyright-year]').textContent = `${fullYear}`;

const addProjectButton = document.querySelector('button.add_project_button');
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

const todayButton = document.querySelector('button.today_button');
const thisWeekButton = document.querySelector('button.date_range_button');
const content = document.querySelector('#context_content');

content.appendChild(today.createHTMLElementsForToday(0));
content.appendChild(thisWeek.createHTMLElementsForThisWeek(0));
content.appendChild(blankContent.blankContentForContextContent(0))

const homeButtons = [
  todayButton,
  thisWeekButton,
];

homeButtons.forEach(element => {
  
  element.addEventListener(
    'click',
    (event) => {

      const eventClasListValue = event.target.classList.value;
      htmlElement.elementPusher(eventClasListValue);

      const lastElement = document.querySelector(`${htmlElement.getLastElement()}`);
      const secondToTheLastElement = document.querySelector(`${htmlElement.getSecondToTheLastElement()}`);


      lastElement.classList.toggle('hide');
      secondToTheLastElement.classList.toggle('hide');
    }
  );
});

const save = document.querySelector('.save');


save.addEventListener(
  'click',
  
  (event) => {

    const input = document.querySelector('input#project_name');
    const projects = document.querySelector('.projects');
    const inputLength = input.value.length;
    const eventClasList = event.target.classList.value;
    const countF = projectLists.getProjectsLength();

    formf.formToggling(
      event,
      eventClasList,
      inputLength,
      addProjectButton,
      form,
    );

    formf.formInputSave(
      input.value,
      countF,
      inputLength
    );

    localStorageProjects.localStorageProjectsSetter();
    localStorageProjects.localProjectArrayPusherToLocalStorageProjects();

    conditionAppending.appendding(
      projects,
      countF + 1,
      input,
    );

    conditionAppending.appenddingNew(
      content,
      mainContent.representProjectName(
        input.value,
        countF,
      ),
      inputLength,
    );

    input.value = '';
  }
);

