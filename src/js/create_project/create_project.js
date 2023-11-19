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
    const projectObj = Project(
      projectName,
      projectIndex
    );
  
    return projects.push(projectObj);
  };

  const getProjectsLength = () => {
    return projects.length;
  };

  const getProjectsItem = (index) => {
    return projects.at(index);
  };

  const getProjects = () => [...projects];

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
    getProjects,
    dereferProjectItem,
  };
};

export const projectLists = Projects();
