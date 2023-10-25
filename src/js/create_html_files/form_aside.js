export const elementPreventdefault = function preventAnElementByPassingAnElementToThisFunctionParameter(event) {
  event.preventDefault();
};

export const elementToggler = function toggleTwoElementsWhenYouNeedToHideOrShowAnElementIfOneElementIsHidden(
  element,
  secondElement
) {
  element.classList.toggle('hide');
  secondElement.classList.toggle('hide');
};

export const parentAppendFunctionValue = function passParentAndChildrenForParentToAppendThisFunctinoAsAValue(
  parent,
  children,
  ) {
  parent.appendChild(children);
};
