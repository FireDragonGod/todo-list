class Project {
  constructor(
    project,
    index,
  ) {
    this.project = project;
    this.index = index;
  };

  getPropValue(prop) {
    return this[prop];
  };

  setPropValue(prop, value) {
    return this[prop] = value;
  }
};

class Projects {
  #projects = [];

  addProject(
    project,
    index,
  ) {
    if (project.length >= 4) {
      return this.#projects.push(new Project(
        project,
        index,
      ));
    }
  };

  getProjectsLength() {
    return this.#projects.length;
  };

  getProjectsItemPropertyValue(
    index,
    property
  ) {
    return this.#projects.at(index).getPropValue(property);
  };

  dereferProjectsItem(index) {
    return this.#projects.splice(
      index,
      1,
      null
    );
  };
};

export const projectLists = new Projects();

