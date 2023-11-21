const StoreProjectInLocalStorage = () => {
  const projectStoringInLocalStorage = (
    projectKey,
    projectValue
  ) => {
    localStorage.setItem(
      `Project ${projectKey}`,
      JSON.stringify(projectValue)
    );
  };
  return {
    projectStoringInLocalStorage,
  };
};

export const storingProjectsInLocalStorage = StoreProjectInLocalStorage();

const GetProjectsFromLocalStorage = () => {
  const projectsFromLocalStorage = [];

  const projectFromLocalStorageGetter = () => {
    for (let index = 0; index < localStorage.length; index++) {
      const parsedProjectItemsFromLocalStorage = JSON.parse(localStorage.getItem(`Project ${index}`));
      projectsFromLocalStorage.push(parsedProjectItemsFromLocalStorage);
    }
  };
  return {
    projectFromLocalStorageGetter,
    projectsFromLocalStorage,
  };
};

export const getProjectsFromLocalStorage = GetProjectsFromLocalStorage();
