export const project = [];

class Project {
  constructor(
    name,
    index
  ) {
    this.project = name;
    this.dataKey = index;
  };
};

export const count = () => {
  return project.length;
};

class ProjectObject {
  createProjectObj(
    projectName, 
    dataKey
  ) {
    const projectObj = new Project(
      projectName,
      dataKey
    );
    return project.push(projectObj);
  };
};

export const projectObject = new ProjectObject();
