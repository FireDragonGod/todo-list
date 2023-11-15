import { projectLists } from "./create_project";
import { ListOfProjectForDom } from '../create_html_files/create_project_aside'

const  AppendingChildrenWithConditional = () => {

  const appendding = function AppendIfObjectLengthIsGreaterThanOrEqualToOne(
    parent,
    objectLength,
    inputValue,
  ) {
    let minimumInputValueLength = inputValue.value.length;

    if (
      objectLength >= 1
      && minimumInputValueLength >= 4
    ) {

      
      const projectName = projectLists.getProjectsItem(-1).projectName;
      const projectIndex = projectLists.getProjectsItem(-1).projectIndex;
      
      parent.appendChild(ListOfProjectForDom.AppendListChildren(
        projectName,
        projectIndex,
      ))
    };
  };

  const appenddingNew = function appendObjectIfTheValueIsGreaterThanOrEqualToFour(
    parent,
    object,
    valueLength,
  ) {
    if (valueLength >= 4) {
      return parent.appendChild(object)
    }
  };

  return {
    appendding,
    appenddingNew,
  }
};

export const conditionAppending = AppendingChildrenWithConditional();
