import { projectLists } from "./create_project";
import { parentAppendFunctionValue } from "../create_html_files/form_aside";
import { ListOfProjectForDom } from '../create_html_files/create_project_aside'

class  AppendingChildrenWithConditional {

  appendding = function AppendIfObjectLengthIsGreaterThanOrEqualToOne(
    parent,
    objectLength,
    inputValue
  ) {
    let minimumInputValueLength = inputValue.value.length;

    if (
      objectLength >= 1
      && minimumInputValueLength >= 4
    ) {
      const projectName = projectLists.getProjectsItemPropertyValue(-1, 'project');
      const projectIndex = projectLists.getProjectsItemPropertyValue(-1, 'index');

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
