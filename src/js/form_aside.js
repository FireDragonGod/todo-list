import { projectObject } from './create_project';

const elementPreventdefault = function preventAnElementByPassingAnElementToThisFunctionParameter(event) {
  event.preventDefault();
};

export const elementToggler = function toggleTwoElementsWhenYouNeedToHideOrShowAnElementIfOneElementIsHidden(
  element,
  secondElement
) {
  element.classList.toggle('hide');
  secondElement.classList.toggle('hide');
};

class Form {
  formToggling(
    event,
    classList,
    input,
    element,
    secondElement
  ) {
    if (
      classList === 'add_project_button'
      || classList === 'cancel'
      || classList === 'save' & input >= 4
    ) {
      
      elementPreventdefault(event);

      elementToggler(
        element,
        secondElement,
      );
    }
  };

  formInputSave(
    name = 'projectName',
    data = 0,
    inputLength = 0,
    ) {
    if (inputLength >= 4) {
      return projectObject.createProjectObj(
        name,
        data
      );
    }
  };

};

export const formf = new Form();
