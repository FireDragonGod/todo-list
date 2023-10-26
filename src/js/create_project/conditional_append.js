import { projectArr } from "./create_project";
import { parentAppendFunctionValue } from "../create_html_files/form_aside";
import { ListOfProjectForDom } from '../create_html_files/create_project_aside'

class AppendingChildrenWithConditional {

  appendding = function AppendIfObjectLengthIsGreaterThanOrEqualToOne(
    parent,
    object,
    inputValue
  ) {
    let objectLength = object.length;
    let minimumInputValueLength = inputValue.value.length;

    if (objectLength >= 1
      && minimumInputValueLength >= 4) {

      const projectName = projectArr.slice(-1)[0].project;
      const projectIndex = projectArr.slice(-1)[0].dataKey;

      parentAppendFunctionValue(
        parent,
        ListOfProjectForDom.AppendListChildren(
          projectName,
          projectIndex
        )
      );
    };
  };

  appenddingNew = function appendObjectIfTheValueIsGreaterThanOrEqualToFour(
    parent,
    object,
    valueLength
  ) {
    if (valueLength >= 4) {
      return parentAppendFunctionValue(
        parent,
        object
      );
    }
  };
};

export const conditionAppending = new AppendingChildrenWithConditional();