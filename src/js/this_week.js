class ThisWeek {
  
  createHTMLElementsForThisWeek(dataThisWeek) {
    const wrapper = document.createElement('div');
    const h1 = document.createElement('h1');
    const task = document.createElement('div');

    h1.textContent = 'This Week';
    h1.setAttribute('data-this-week', '');
    task.setAttribute('id', 'data-this-week');
    wrapper.setAttribute('data-this-week', '');
    
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

export const thisWeek = new ThisWeek();