class Today {
  
  createHTMLElementsForToday(dataToday) {
    const wrapper = document.createElement('div');
    const h1 = document.createElement('h1');
    const task = document.createElement('div');

    h1.textContent = 'Today';
    h1.setAttribute('data-today', `${dataToday}`);
    task.setAttribute('id', 'data-today');
    wrapper.setAttribute('data-today', `${dataToday}`);
    wrapper.setAttribute('class', ``);
    
    const childrenElements = [
      h1,
      task
    ];

    childrenElements.forEach((element) => {
      wrapper.appendChild(element);
    });

    return wrapper;
  };
};

export const today = new Today();