import moreVert from './assets/more_vert_FILL0_wght400_GRAD0_opsz24.svg'; 

class ListOfProject {

  AppendListChildren(
    projectName, 
    dataKey
  ) {

    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const imgWrapper = document.createElement('div');

    let moreVertical = new Image();
    moreVertical.src = moreVert;

    li.classList.add('project-list');

    h3.textContent = `${projectName}`;
    
    const elements = [
      li,
      h3,
      imgWrapper,
      moreVertical,
    ];

    elements.forEach((element) => {
      element.setAttribute(
        'data-key',
        `${dataKey}`
      );
    });

    imgWrapper.appendChild(moreVertical);

    const listChildren = [
      h3,
      imgWrapper,
    ];

    listChildren.forEach((element) => {
      li.appendChild(element);
    });

    return li
  };
};

export const ListOfProjectForDom = new ListOfProject();
