import { projectLists } from "./create_project";

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
      event.preventDefault();
      element.classList.toggle('hide');
      secondElement.classList.toggle('hide');
    };
  };

  formInputSave(
    name = 'projectName',
    data = 0,
    inputLength = 0
  ) {
    if (inputLength >= 4) {
      return projectLists.addProject(
        name,
        data,
      )
    }
  };
};

export const formf = new Form();
