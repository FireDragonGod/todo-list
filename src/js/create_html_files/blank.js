class BlankContent {

  blankContentForContextContent = function createElementsToUseAsAdefaultElementWhenItemsAreRemoved(dataKey) {
    const divContentBlankContent = document.createElement('div');
    divContentBlankContent.setAttribute(
      'data-blank',
      `${dataKey}`,
    );
    return divContentBlankContent;
  };
};

export const blankContent = new BlankContent();