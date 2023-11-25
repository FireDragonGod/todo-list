import remove from '../../assets/img/remove_FILL0_wght400_GRAD0_opsz24.svg';
import { htmlElement } from '../create_project/pusher';
import { projectLists } from '../create_project/create_project';
import { storingProjectsInLocalStorage } from '../local_storage_/local_storage_projects';

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

    const elementsToListen = [
      li,
      h3,
    ]
    
    elementsToListen.forEach((element) => {
      
      element.addEventListener('click', (event) => {
        const dataKey = event.target.getAttribute('data-key');

        htmlElement.elementPusher(
          undefined,
          dataKey,
        );

        const lastElement = htmlElement.getLastElement();
        const previousElement = htmlElement.getSecondToTheLastElement();

        const lastQueryElement = document.querySelector(`${lastElement}`);
        const previousQueryElement = document.querySelector(`${previousElement}`);
        
        previousQueryElement.classList.toggle('hide');
        lastQueryElement.classList.toggle('hide');
      });
    })

    removeImg.addEventListener('click', (event) => {
      event.stopImmediatePropagation();
      const projectContent = document.querySelector(`div[data-key="${dataKey}"]`);
      const blankContents = 'div[data-blank]';

      htmlElement.elementPusher(
        undefined,
        undefined,
        blankContents,
      );

      const lastElement = htmlElement.getLastElement();
      const previousElement = htmlElement.getSecondToTheLastElement();
      const lastQueryElement = document.querySelector(`${lastElement}`);
      const previousQueryElement = document.querySelector(`${previousElement}`);

      previousQueryElement.classList.toggle('hide');
      lastQueryElement.classList.toggle('hide');

      // remove this project, remove it's content container, derefer project item from Projects,
      // update localstorage after projects item has been derefered
      li.remove();
      projectContent.remove();
      projectLists.dereferProjectItem(dataKey);
      storingProjectsInLocalStorage.projectStoringInLocalStorage(projectLists.revealProjects());
    });

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