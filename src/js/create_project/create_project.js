const Project = (
  projectName, 
  projectIndex
) => {
  'use strict';

  return { 
    projectName, 
    projectIndex 
  };
};

const Projects = () => {
  'use strict';

  const projects = [];

  const addProject = (
    projectName,
    projectIndex
  ) => {
    if (projectName.length >= 4) {
      const projectObj = Project(
        projectName,
        projectIndex
      );
      return projects.push(projectObj);
    }
  };

  const getProjectsLength = () => {
    return projects.length;
  };

  const getProjectsItem = (index) => {
    return projects.at(index);
  };

  const revealProjects = () => [...projects];

  const dereferProjectItem = (index) => {
    return projects.splice(
      index,
      1,
      null
    );
  };

  return { 
    getProjectsItem,
    addProject, 
    getProjectsLength,
    dereferProjectItem,
    revealProjects,
  };
};

export const projectLists = Projects();
