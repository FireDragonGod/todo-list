import moreVert from './more_vert_FILL0_wght400_GRAD0_opsz24.svg'; 

export class ListOfProject {
  li = document.createElement('li');
  h3 = document.createElement('h3')
  
  AppendListChildren(
    projectName, 
    dataKey
  ) {
    let moreVertical = new Image();
    moreVertical.src = moreVert;

    this.h3.textContent = `${projectName}`;
    
    const elements = [
      this.li,
      this.h3,
      moreVertical,
    ];

    elements.forEach((element) => {
      element.setAttribute(
        'data-key',
        `${dataKey}`
      )
    });

    const listChildren = [
      this.h3,
      moreVertical
    ];

    listChildren.forEach((element) => {
      this.li.appendChild(element);
    });
    return this.li
  };
};