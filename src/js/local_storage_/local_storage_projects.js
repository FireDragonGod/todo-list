'use strict';

const StoreProjectInLocalStorage = () => {
  const projectStoringInLocalStorage = (projectValue) => {
    localStorage.setItem(
      'Project',
      JSON.stringify(projectValue)
    );
  };
  return {
    projectStoringInLocalStorage,
  };
};

export const storingProjectsInLocalStorage = StoreProjectInLocalStorage();

const GetProjectsFromLocalStorage = () => {

  const projectFromLocalStorageGetter = () => {
    return JSON.parse(localStorage.getItem('Project'));
  };

  return {
    projectFromLocalStorageGetter,
  };
};

export const getProjectsFromLocalStorage = GetProjectsFromLocalStorage();
