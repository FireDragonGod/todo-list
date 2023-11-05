const BlankContent = function CreateAnHTMLElementThatIsUsedWhenTogglingAnElementWithProjects() {

  const blankContentForContextContent = function createElementsToUseAsAdefaultElementWhenItemsAreRemoved() {
    const divContentBlankContent = document.createElement('div');
    divContentBlankContent.setAttribute(
      'data-blank',
      '0',
    );
    return divContentBlankContent;
  };

  return { blankContentForContextContent };
};

export const blankContent = BlankContent();