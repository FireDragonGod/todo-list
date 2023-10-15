class ListOfProject {

  AppendListChildren(
    projectName, 
    dataKey
  ) {

    const li = document.createElement('li');
    const h3 = document.createElement('h3');

    li.classList.add('project-list');

    h3.textContent = `${projectName}`;
    
    const elements = [
      li,
      h3,
    ];

    elements.forEach((element) => {
      element.setAttribute(
        'data-key',
        `${dataKey}`
      );
    });

    const listChildren = [
      h3,
    ];

    listChildren.forEach((element) => {
      li.appendChild(element);
    });

    return li
  };
};

export const ListOfProjectForDom = new ListOfProject();