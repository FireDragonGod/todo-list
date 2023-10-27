import './assets/style.css';
import { formf } from './js/create_project/Form';
import { pusher } from './js/create_project/pusher';
import { elementToggler } from './js/create_html_files/form_aside';
import { count, gettingProjectArr } from './js/create_project/create_project';
import { conditionAppending } from './js/create_project/conditional_append';
import { today } from './js/create_html_files/today';
import { thisWeek } from './js/create_html_files/this_week';
import { mainContent } from './js/create_html_files/todo_with_form';

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

content.appendChild(
  today.createHTMLElementsForToday(999),
);

content.appendChild(
  thisWeek.createHTMLElementsForThisWeek(999),
);

const homeButtons = [
  todayButton,
  thisWeekButton,
];

homeButtons.forEach(element => {
  
  element.addEventListener(
    'click',
    (event) => {

      const eventClasListValue = event.target.classList.value;
      pusher.elementPusher(eventClasListValue);

      const lastElement = document.querySelector(`${pusher.lastValueFromArrayOfElementInStrings}`);
      const secondToTheLastElement = document.querySelector(`${pusher.secondLastValueFromArrayOfElementInStrings}`);

      elementToggler(
        lastElement,
        secondToTheLastElement
      );
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
    const countF = count();

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

    conditionAppending.appendding(
      projects,
      gettingProjectArr(),
      input
    );

    conditionAppending.appenddingNew(
      content,
      mainContent.representProjectName(
        input.value,
        countF
      ),
      inputLength,
    );

    input.value = '';
  }
);

