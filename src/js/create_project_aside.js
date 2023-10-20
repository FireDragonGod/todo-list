import remove from '../assets/remove_FILL0_wght400_GRAD0_opsz24.svg';

class ListOfProject {

  AppendListChildren(
    projectName, 
    dataKey
  ) {

    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    let removeImg = new Image();
    removeImg.src = remove;

    removeImg.setAttribute(
      'draggable',
      'false'
    );

    li.classList.add('project-list');

    h3.textContent = `${projectName}`;
    
    const elements = [
      li,
      h3,
      removeImg,
    ];

    removeImg.addEventListener(
      'click',
      (event) => {
        li.remove();
      }
    );

    elements.forEach((element) => {
      element.setAttribute(
        'data-key',
        `${dataKey}`
      );
    });

    const listChildren = [
      h3,
      removeImg
    ];

    listChildren.forEach((element) => {
      li.appendChild(element);
    });

    return li
  };
};

export const ListOfProjectForDom = new ListOfProject();