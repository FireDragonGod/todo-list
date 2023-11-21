const HtmlElement = () => {

  const elements = ['div[data-blank]'];

  const blankContent = (elementClassList) => {
    if (elementClassList === 'div[data-blank]' ) {
      return elements.push('div[data-blank]');
    }
  };

  const projectDataAttribute = (
    dataAttribute,
  ) => {
    const dataAttributeValue = `div[data-key="${dataAttribute}"]`;
    return elements.push(dataAttributeValue);
  };

  const asideButtons = (classListValue) => {
    if (classListValue === 'today_button') {
      return elements.push('div[data-today]')
    }
    
    if (classListValue === 'date_range_button') {
      return elements.push('div[data-this-week]') 
    }
  };

  const elementPusher = (
    classListValue,
    dataAttributeValue,
    elementWithDataAttribute,
  ) =>  {
    if (classListValue) {
      return asideButtons(classListValue);
    };
    if (dataAttributeValue) {
      return projectDataAttribute(dataAttributeValue);
    };
    if (elementWithDataAttribute) {
      return blankContent('div[data-blank]');
    };
  };

  const getSecondToTheLastElement = () => {
    return elements.slice(-2).reverse().slice(-1);
  };

  const getLastElement = () => {
    return elements.slice(-1);
  };

  return {
    elementPusher,
    getSecondToTheLastElement,
    getLastElement,
  }
};


export const htmlElement = HtmlElement();