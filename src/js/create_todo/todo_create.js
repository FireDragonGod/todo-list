import { format } from 'date-fns';

export const todoList = [];

const Todo = function TodoItem(
    title,
    description,
    priority,
    dueDate,
    index,
  ){

  'use strict';

  const todo = {
    title: title,
    description: description,
    priority: priority,
    dueDate: dueDate,
    index: index,
  };

  function getColorBasedOnThePriorityLevel() {
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
  };

  function formatDate() {
    let date = dueDate;
    let yearString = date.slice(0, 4);
    let monthString = date.slice(5, 7);
    let dayString = date.slice(8, 10);

    let year = parseInt(yearString);
    let month = parseInt(monthString);
    let day = parseInt(dayString);

    return format(new Date(year, (month - 1), day), 'MM/dd/yyyy');
  };

  function getPropertyValue() {
    return todo;
  };

  function setPropertyValue(property, value) {
    return todo[property] = value;
  };

  return {
    getPropertyValue,
    setPropertyValue,
    getColorBasedOnThePriorityLevel,
    formatDate,
  }
};

function AddTodo() {
  'use strict';

  function createTodo(
    title,
    description,
    priority,
    dueDate,
    index,
  ) {
    if (title.length >= 4) {
      const todo = Todo(
        title,
        description,
        priority,
        dueDate,
        index,
      );
      return todoList.push(todo);
    }
  };

  return {
    createTodo,
  }
}

export const addTodo = AddTodo();


