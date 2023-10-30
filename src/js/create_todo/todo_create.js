import { format, parseISO } from 'date-fns'

export const todoList = [];

class Todo {
  
  constructor(
    title,    
    description,
    priority,
    dueDate
  ) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  };

  capitalize = function getTheFirstLetterToCapitalizeAndLowerCaseTheRest(letters) {
    const firstLetterString = letters.charAt().toUpperCase();
    const theRestOfTheString = letters.slice(1).toLowerCase()
    return `${firstLetterString}${theRestOfTheString}`
  };

  prioritizeLow = function returnColorBasedOnThePriority(priorityLevel) {
    switch (priority) {
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

  formatDate = function formatDateUsingALibrary(string) {
    return format(parseISO(string), 'hh:mm bb MM/dd/yyyy');
  };

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
    dueDate
  ) {
    const todos = new Todo(
      title, 
      description, 
      priority, 
      dueDate
    );

    return todoList.push(todos);
  };
}

export const todoCreate = new TodoCreate();