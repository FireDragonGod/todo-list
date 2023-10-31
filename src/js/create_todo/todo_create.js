import { format, parseISO } from 'date-fns';

export const todoList = [];

class Todo {
  
  constructor(
    title,    
    description,
    priority,
    dueDate,
    count,
  ) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.count = count;
  };

  prioritize = function returnColorBasedOnThePriority(priorityLevel) {
    switch (priorityLevel) {
      case 'low_priority' : {
        return 'green';
      }
      case 'medium_priority' : {
        return 'yellow';
      }
      case 'high_priority' : {
        return 'orange';
      }
    }
  }

  // hh:mm bb = 00:00 AM
  formatDate = function formatDateUsingALibrary(string) {
    let yearString = string.slice(0, 4);
    let monthString = string.slice(5, 7);
    let dayString = string.slice(8, 10);
    return format(new Date(++yearString, (++monthString - 1), ++dayString), 'MM/dd/yyyy');
  };

  countTodoList = () => todoList.length;

  renameTitle(
    dataKey = 0,
    titleValue = ''  
  ) {
    return todoList[dataKey].title = this.capitalize(titleValue);
  };

  editDescription(
    dataKey = 0,
    descriptionValue = ''
  ) {
    return todoList[dataKey].description = descriptionValue;
  };

  changePriority(
    dataKey = 0,
    priorityValue = ''
  ) {
    return todoList[dataKey].priority = priorityValue;
  };
  
  changeDueDate(
    dataKey = 0,
    dueDateValue = ''
  ) {
    return todoList[dataKey].dueDate = this.formatDate(dueDateValue);
  };
};

export const todos = new Todo();

class TodoCreate {

  addTodo = function createANewTodoObject(
    title,
    description, 
    priority, 
    dueDate,
    count,
  ) {
    if (
      title.length >= 4
      && title.length <= 60
      && description.length <= 120
    ) {
      const todos = new Todo(
        title, 
        description, 
        priority, 
        dueDate,
        count,
      );
    }
    return todoList.push(todos);
  };
};

export const todoCreate = new TodoCreate();