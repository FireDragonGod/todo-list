'use strict';

// styles
import './assets/css/style.css';

// Application 
import { formf } from './js/create_project/Form';
import { mainContent } from './js/create_html_files/todo_with_form';
import { blankContent } from './js/create_html_files/blank';
import { ListOfProjectForDom } from './js/create_html_files/create_project_aside';

// Logic
import { conditionAppending } from './js/create_project/conditional_append';
import { projectLists } from './js/create_project/create_project';
import { 
  getProjectsFromLocalStorage,
  storingProjectsInLocalStorage,
} from './js/local_storage_/local_storage_projects';
import { getTodoItemFromLocalStorage } from './js/local_storage_/local_storage_todoLists';
import { colorConvert, todoLists } from './js/create_todo/todo_create';
import { todoItem } from './js/create_html_files/create_todo_item';

const copyrightYear = document.querySelector('a[data-copyright-year]').textContent = `${new Date().getFullYear()}`;
const addProjectButton = document.querySelector('button.add_project_button');
const cancel = document.querySelector('.cancel');
const save = document.querySelector('.save');
const content = document.querySelector('#context_content');
const form = document.querySelector('.formList');

content.appendChild(blankContent.blankContentForContextContent(0));

addProjectButton.addEventListener(
  'click',
  (event) => {
    const eventClasList = event.target.classList.value;
    formf.formToggling(
      event,
      eventClasList,
      undefined,
      addProjectButton,
      form,
    );
  }
);

cancel.addEventListener(
  'click',
  (event) => {

    const input = document.querySelector('input#project_name');
    const eventClasList = event.target.classList.value;

    formf.formToggling(
      event,
      eventClasList,
      undefined,
      addProjectButton,
      form,
    );
    input.value = '';
  }
);

save.addEventListener(
  'click',
  
  (event) => {

    const input = document.querySelector('input#project_name');
    const projects = document.querySelector('.projects');
    const inputLength = input.value.length;
    const eventClasList = event.target.classList.value;
    const countF = projectLists.getProjectsLength();

    formf.formToggling(
      event,
      eventClasList,
      inputLength,
      addProjectButton,
      form,
    );

    projectLists.addProject(
      input.value,
      countF,
    );

    const projectName = projectLists.getProjectsItem(-1).projectName;
    const projectIndex = projectLists.getProjectsItem(-1).projectIndex;

    conditionAppending.projectOnAside(
      projects,
      countF + 1,
      input,
      ListOfProjectForDom.AppendListChildren(
        projectName,
        projectIndex,
      ),
    );

    conditionAppending.projectContent(
      content,
      mainContent.representProjectName(
        input.value,
        countF,
      ),
      inputLength,
    );

    storingProjectsInLocalStorage.projectStoringInLocalStorage(projectLists.revealProjects());
    input.value = '';
  }
);

const populateProjectFromLocalStorage = () => {
  const locationToPopulate = document.querySelector('ul.projects');

  const populateProjectsOnAside = (projectFromLocalStorage) => {
    for (let index = 0; index < projectFromLocalStorage.length; index++) {
      const element = projectFromLocalStorage[index];
      if (element !== null) {
        projectLists.addProject(
          element.projectName,
          element.projectIndex,
        );

        locationToPopulate.appendChild(ListOfProjectForDom.AppendListChildren(
          element.projectName,
          element.projectIndex,
        ));

        content.appendChild(mainContent.representProjectName(
          element.projectName,
          element.projectIndex,
        ));
      }
      if (element === null) {
        projectLists.dereferProjectItem(index);
      }
    }
  };

  return {
    populateProjectsOnAside,
  };
};


const todoItemForDom = () => {
  const todoListItemAdderGettingItFromLocalStorage = (todoItemFromLocalStorage) => {
    for (let index = 0; index < todoItemFromLocalStorage.length; index++) {
      const todoItem = todoItemFromLocalStorage[index];
      if (todoItem !== null) {
        todoLists.addTodoLists(
          todoItem.title,
          todoItem.description,
          todoItem.priority,
          todoItem.dueDate,
          todoItem.index,
          todoItem.ProjectThisTodoIsCreated,
        )
      }
      if (todoItem === null) {
        todoLists.dereferTodoListsItem(index);
      }
    }
  };

  const populateTodoListItemBelongingToTheirRespectiveProjectItem = () => {
    const revealedTodoListsItems = todoLists.revealTodoLists();
    revealedTodoListsItems.forEach((element) => {
      if (element !== null) {
        const justBelowTheButton = document.querySelector(`div[data-key="${element.ProjectThisTodoIsCreated}"] > div`);
        if (justBelowTheButton === null) {
          todoLists.dereferTodoListsItem(element.index);
        }
        if (justBelowTheButton !== null) {
          justBelowTheButton.appendChild(todoItem.createTodoItem(
            element.index,
            colorConvert.priorityConvert(element.priority),
            element.title,
            element.dueDate,
            element.description,
            element.priority,
            element.ProjectThisTodoIsCreated,
          ))
        }
      }
    });
  };

  return {
    todoListItemAdderGettingItFromLocalStorage,
    populateTodoListItemBelongingToTheirRespectiveProjectItem,
  };
};


window.addEventListener(
  'load',
  () => {
    // populate projects on aside section
    const projectsFromLocalStorage = getProjectsFromLocalStorage.projectFromLocalStorageGetter();
    const populateProjects = populateProjectFromLocalStorage();
    populateProjects.populateProjectsOnAside(projectsFromLocalStorage === null ? [] : projectsFromLocalStorage);

    // populate todo item on their respective project location
    const todoItemPopulator = todoItemForDom();
    todoItemPopulator.todoListItemAdderGettingItFromLocalStorage(getTodoItemFromLocalStorage.gettingTodoItemFromLocalStorage() === null ? [] : getTodoItemFromLocalStorage.gettingTodoItemFromLocalStorage());
    todoItemPopulator.populateTodoListItemBelongingToTheirRespectiveProjectItem();
});
