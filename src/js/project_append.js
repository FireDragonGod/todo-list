import { projectArr } from './create_project';
import { ListOfProjectForDom } from './create_project_aside';

const parentAppendFunctionValue = function passParentAndChildrenForParentToAppendThisFunctinoAsAValue(
  parent,
  children,
  ) {
  parent.appendChild(children);
};

class AppendingChildrenWithConditional {

  appendding = function AppendIfObjectLengthIsGreaterThanOrEqualToOne(
    parent,
    object,
    inputValue
  ) {
    let objectLength = object.length;
    let minimumInputValueLength = inputValue.value.length;

    if (
      objectLength >= 1
      && minimumInputValueLength >= 4
    ) {

      const projectName = projectArr.slice(-1)[0].project;
      const projectIndex = projectArr.slice(-1)[0].dataKey;

      parentAppendFunctionValue(
        parent,
        ListOfProjectForDom.AppendListChildren(
          projectName,
          projectIndex,
        ),
      );
    }
  };
};

export const conditionAppending = new AppendingChildrenWithConditional();