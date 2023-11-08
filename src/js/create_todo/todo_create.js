import { format } from 'date-fns';

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
  };

  checkPriority = function getPriorityToMatchWithThePriorityIfItsMatchThenReturnChecked(
    test,
    match,
  ) {
    // 1 == true && 0 == false
    return test === match ? 1 : 0;
  };
  
  // hh:mm bb = 00:00 AM
  formatDate = function formatDateUsingALibrary(string) {
    let yearString = string.slice(0, 4);
    let monthString = string.slice(5, 7);
    let dayString = string.slice(8, 10);

    let year = parseInt(yearString);
    let month = parseInt(monthString);
    let day = parseInt(dayString);

    return format(new Date(year, (month - 1), day), 'MM/dd/yyyy');
  };

  countTodoList = () => todoList.length;

  renameTitle = function getTheDataKeyThenUsingDotNotationToEqualTheValueOfChange(
    dataKey = 0,
    titleValue = ''
  ) {
    if (titleValue.length >= 4) {
      return todoList[dataKey].title = titleValue;
    };
  }

  editDescription = function getTheDataKeyThenUsingDotNotationToEqualTheValueOfChange(
    dataKey = 0,
    descriptionValue = ''
  ) {
    return todoList[dataKey].description = descriptionValue;
  };

  changePriority = function getTheDataKeyThenUsingDotNotationToEqualTheValueOfChange(
    dataKey = 0,
    priorityValue = ''
  ) {
    return todoList[dataKey].priority = priorityValue;
  };
  
  changeDueDate = function getTheDataKeyThenUsingDotNotationToEqualTheValueOfChange(
    dataKey = 0,
    dueDateValue = ''
  ) {
    return todoList[dataKey].dueDate = dueDateValue;
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
    if (title.length >= 4) {
      const todos = new Todo(
        title, 
        description, 
        priority,
        dueDate,
        count,
      );
      return todoList.push(todos);
    }
  };
};

export const todoCreate = new TodoCreate();

