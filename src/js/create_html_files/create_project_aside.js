import { pusher } from '../create_project/pusher';
import { elementToggler } from '../create_html_files/form_aside'
import remove from '../../assets/remove_FILL0_wght400_GRAD0_opsz24.svg';

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
      
      element.addEventListener(
        'click',
        (event) => {
          const dataKey = event.target.getAttribute('data-key');

          pusher.elementPusher(
            undefined, 
            dataKey
          );

          
          const lastElement = pusher.lastValueFromArrayOfElementInStrings;
          const previousElement = pusher.secondLastValueFromArrayOfElementInStrings;

          const lastQueryElement = document.querySelector(`${lastElement}`);
          const previousQueryElement = document.querySelector(`${previousElement}`);

          console.log(event, previousQueryElement)
          
          elementToggler(
            previousQueryElement,
            lastQueryElement,
          )
        }
      )
    })

    removeImg.addEventListener(
      'click',
      (event) => {
        event.stopImmediatePropagation();
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