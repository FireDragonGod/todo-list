// *----------------------------- Aside Toggling ------------------------------------* //


import { Switcher } from './switcher';
import menuImage from './assets/menu_FILL0_wght400_GRAD0_opsz24.svg';
import closeImage from './assets/close_FILL0_wght400_GRAD0_opsz24.svg';

const imageSwitch = new Switcher();
const hiddenAside = document.querySelector('header > img:first-child');
const aside = document.querySelector('main > aside');

hiddenAside.addEventListener(
  'click',
  () => {
    const AsideClasstValue = hiddenAside.classList.value;

    hiddenAside.classList.toggle('close_image');
    aside.classList.toggle('hide');
    
    imageSwitch.switchImage(
      AsideClasstValue,
      hiddenAside,
      'close_image',
      '',
      closeImage,
      menuImage
    );

  }
);

// *------------------------------------- Click add project ----------------------*  //

import { count, projectObject } from './project';
import { Checker } from './Checker';

const addProjectButton = document.querySelector('.add_project');
const cancel = document.querySelector('.cancel');
const form = document.querySelector('.formList');

class PreventElementDefault {
  static preventingDefault(element) {
    return element.preventDefault();
  };
};

class Form {
  formToggling(
    event,
    classList,
    input,
  ) {
    if (
      classList === 'add_project'
      || classList === 'cancel'
      || classList === 'save' & input >= 4
    ) {
      PreventElementDefault.preventingDefault(event);
      addProjectButton.classList.toggle('hide');
      form.classList.toggle('hide');
    }
  };

  formInputSave(
    name = 'projectName',
    data = 0,
    inputLength,
  ) {
    if (inputLength > 3) {
      return projectObject.createProjectObj(
        name,
        data
      )
    }
  };
};

const formf = new Form();


addProjectButton.addEventListener(
  'click',
  (event) => {
    const eventClasList = event.target.classList.value;
    formf.formToggling(
      event,
      eventClasList,
      undefined
    );
  }
);

cancel.addEventListener(
  'click',
  (event) => {
    const eventClasList = event.target.classList.value;
    formf.formToggling(
      event,
      eventClasList,
      undefined
    );
  }
);

const save = document.querySelector('.save');


save.addEventListener(
  'click',

  (event) => {

    const input = document.querySelector('input#project_name');
    const inputLength = input.value.length;
    const projects = document.querySelector('.projects');
    const eventClasList = event.target.classList.value;

    formf.formToggling(
      event,
      eventClasList,
      inputLength
    );

    formf.formInputSave(
      input.value,
      count(),
      inputLength
    );

    Checker.checkProjectLengthThenAppendTheProject(projects);

    input.value = ''
  }
)

