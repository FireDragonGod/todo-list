import { projectObject } from "./create_project";
import { elementPreventdefault } from "../create_html_files/form_aside";
import { elementToggler } from "../create_html_files/form_aside";

class Form {
  formToggling(
    event,
    classList,
    input,
    element,
    secondElement
  ) {
    if (classList === 'add_project_button'
      || classList === 'cancel'
      || classList === 'save' & input >= 4) {

      elementPreventdefault(event);

      elementToggler(
        element,
        secondElement
      );
    }
  };

  formInputSave(
    name = 'projectName',
    data = 0,
    inputLength = 0
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
