'use strict';

const SetTodoInLocalStorage = () => {
  const settingTodoInLocalStorage = (todoValue) => {
    return localStorage.setItem(
      'Todo',
      JSON.stringify(todoValue),
    );
  };
  return {
    settingTodoInLocalStorage,
  };
};

export const setTodoInLocalStorage = SetTodoInLocalStorage();


const GetTodoItemFromLocalStorage = () => {

  const gettingTodoItemFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('Todo'));
  };

  return {
    gettingTodoItemFromLocalStorage,
  };
};


export const getTodoItemFromLocalStorage = GetTodoItemFromLocalStorage();
