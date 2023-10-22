const todoObjects = [];

class Todo {

  constructor(
    check,
    title,
    description,
    priority,
    dueDate,
  ) {
    this.check = check;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  };
};

class createTodo { 
  
  useThisToCreateObjectsDynamically(
    check,
    title,
    description,
    priority,
    dueDate,
    ) {
    const todoing = new Todo(
      check,
      title,
      description,
      priority,
      dueDate,
    );
    return todoObjects.push(todoing);
  };
};


export const createTodo = new createTodo();