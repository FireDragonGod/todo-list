
const arrayOfElementInStrings = ['div[data-today]'];

class Pusher {

  elementPusher = function addAValueToTheArrayOfElement(
    classListValue,
    dataAttribute = 0
  ) {
    const todayButtonClassListValue = 'today_button';
    const thisWeekButtonClassListValue = 'date_range_button';
    const dataAttributeValue = `div[data-key="${dataAttribute}"]`;

    switch (classListValue) {
      case todayButtonClassListValue : {
        return arrayOfElementInStrings.push('div[data-today]');
      }
      case thisWeekButtonClassListValue : {
        return arrayOfElementInStrings.push('div[data-this-week]');
      }
      case 'div[data-blank]' : {
        return arrayOfElementInStrings.push('div[data-blank]');
      }
      default: {
        // do nothing
        break;
      }
    };

    if (dataAttribute) {
      return arrayOfElementInStrings.push(dataAttributeValue);
    }
  };

  get secondLastValueFromArrayOfElementInStrings() {
    return arrayOfElementInStrings.slice(-2).reverse().slice(-1);
  };

  get lastValueFromArrayOfElementInStrings() {
    return arrayOfElementInStrings.slice(-1);
  };
}
;


export const pusher = new Pusher();
