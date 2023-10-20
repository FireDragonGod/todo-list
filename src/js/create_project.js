export const projectArr = [];

class Project {
  constructor(
    name = 'name',
    index = 0,
  ) {
    this.project = name;
    this.dataKey = index;
  };
};

export const count = () => projectArr.length;

class ProjectObject {
  createProjectObj(
    projectName = 'string', 
    dataKey = 0,
  ) {
    const projectObj = new Project(
      projectName,
      dataKey
    );
    return projectArr.push(projectObj);
  };
};

export const projectObject = new ProjectObject();
