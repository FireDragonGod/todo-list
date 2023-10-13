import moreVert from './assets/more_vert_FILL0_wght400_GRAD0_opsz24.svg'; 

class RemoveElement {
  static removeAnElement(element) {
    element.remove();
  };
};

class ChangeTitle {};

class MoreVertical {
  
  createMoreVerticalInfo(event) {
    const moreVerticalWrapper = document.createElement('div');
    const edit = document.createElement('p');
    const remove = document.createElement('p');

    edit.textContent = 'edit';
    remove.textContent = 'remove';

    edit.classList.add('edit');
    remove.classList.add('remove');
    moreVerticalWrapper.classList.add('more_vert_wrapper');

    [
      edit, 
      remove
    ].forEach(
      (element) => {
      moreVerticalWrapper.appendChild(element);
    });

    return moreVerticalWrapper;
  };
};

class ListOfProject {

  AppendListChildren(
    projectName, 
    dataKey
  ) {

    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const imgWrapper = document.createElement('div');
    const moreVerticalInformation = new MoreVertical();
    const vertWrapper = moreVerticalInformation.createMoreVerticalInfo();

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
      vertWrapper,
    ];

    listChildren.forEach((element) => {
      li.appendChild(element);
    });

    return li
  };
};

export const ListOfProjectForDom = new ListOfProject();
