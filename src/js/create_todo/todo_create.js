import { format } from 'date-fns';

const Todos = (
  title,
  description,
  priority,
  dueDate,
  index,
) => {
  'use strict';

  return {
    title,
    description,
    priority,
    dueDate,
    index,
  };
};

const Match = () => {
  
  const match = (
    matchValue,
    testValue
  ) => {
    return matchValue === testValue ? 1 : 0;
  };

  return {
    match,
  }
};

export const matchValue = Match();

const Dates = () => {
  'use strict';

  const formatFormDateValues = (newDate) => {
    const date = newDate;

    let yearString = date.slice(0, 4);
    let monthString = date.slice(5, 7);
    let dayString = date.slice(8, 10);

    return {
      yearString,
      monthString,
      dayString,
    };
  };

  const parseDate = (
    yearString,
    monthString,
    dayString,
  ) => {
    let year = parseInt(yearString);
    let month = parseInt(monthString);
    let day = parseInt(dayString);

    return {
      year,
      month,
      day,
    };
  };

  const formatDate = (newDate) => {

    const formDateValues = formatFormDateValues(newDate);
    const parseDateValues = parseDate(formDateValues.yearString, formDateValues.monthString, formDateValues.dayString);

    const year = parseDateValues.year;
    const month = parseDateValues.month;
    const day = parseDateValues.day;


    return format(new Date(year, (month - 1), day), 'MM/dd/yyyy');
  };

  return {
    formatDate,
  };
};

export const dates = Dates();

const convertColor = function convertPriorityIntoColorBasedOnHowImportantItIs() {
  'use strict';

  const colors = [
    'green',
    'yellow', 
    'orange'
  ];

  const priorityConvert = (priority) => {
    switch (priority) {
      case 'low_priority' : {
        return colors[0];
      }
      case 'medium_priority' : {
        return colors[1];
      }
      case 'high_priority' : {
        return colors[2];
      }
      case null : {
        return colors[0];
      }
    }
  };

  return {
    priorityConvert,
  }
};

export const colorConvert = convertColor();

const TodoLists = function TodoListsArrayContainerAndMethodsToGetItemAndDerefer() {
  'use strict';

  const todoLists = [];

  const addTodoLists = (
    title,
    description,
    priority,
    dueDate,
    index,
  ) => {
    if (title.length >= 4) {
      const todoList = Todos(
        title,
        description,
        priority,
        dueDate,
        index,
      );
      return todoLists.push(todoList);
    }
  };

  const getTodoListsLength = () => {
    return todoLists.length;
  };

  const getTodoListsItem = (index) => {
    return todoLists.at(index);
  };

  const dereferTodoListsItem = (index) => {
    return todoLists.splice(
      index,
      1,
      null,
    );
  };

  return {
    addTodoLists,
    getTodoListsItem,
    dereferTodoListsItem,
    getTodoListsLength,
  }
};

export const todoLists = TodoLists();
