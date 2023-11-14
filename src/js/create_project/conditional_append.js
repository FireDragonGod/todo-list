import { projectLists } from "./create_project";
import { ListOfProjectForDom } from '../create_html_files/create_project_aside'

class  AppendingChildrenWithConditional {

  appendding = function AppendIfObjectLengthIsGreaterThanOrEqualToOne(
    parent,
    objectLength,
    inputValue,
  ) {
    let minimumInputValueLength = inputValue.value.length;

    if (
      objectLength >= 1
      && minimumInputValueLength >= 4
    ) {
      const projectName = projectLists.getProjectsItem(-1).getPropValue('project');
      const projectIndex = projectLists.getProjectsItem(-1).getPropValue('index');

      parent.appendChild(ListOfProjectForDom.AppendListChildren(
        projectName,
        projectIndex,
      ))
    };
  };

  appenddingNew = function appendObjectIfTheValueIsGreaterThanOrEqualToFour(
    parent,
    object,
    valueLength,
  ) {
    if (valueLength >= 4) {
      return parent.appendChild(object)
    }
  };
};

export const conditionAppending = new AppendingChildrenWithConditional();
