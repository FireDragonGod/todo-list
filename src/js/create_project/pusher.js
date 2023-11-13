
const elementValues = ['div[data-today]'];

class Pusher {

  pushHtmlElementValue(
    classListValue,
    dataAttribute = 0
  ) {
    switch (classListValue) {
      case 'today_button' : {
        return elementValues.push('div[data-today]');
      }
      case 'date_range_button' : {
        return elementValues.push('div[data-this-week]');
      }
      case 'div[data-blank]' : {
        return elementValues.push('div[data-blank]');
      }
    };
    if (!classListValue) {
      return this.#pushDataAttributeValue(dataAttribute);
    }
  };

  #pushDataAttributeValue(
    dataAttribute,
  ) {
    const dataAttributeValue = `div[data-key="${dataAttribute}"]`;
    return elementValues.push(dataAttributeValue)
  };
};

export const getValueFromArray = {
  
  getSecondToTheLastValue() {
    return elementValues.slice(-2).reverse().slice(-1);
  },

  getLastValue() {
    return elementValues.slice(-1);
  },
};

export const pusher = new Pusher();
