'use strict';

const SetTodoInLocalStorage = () => {
  const settingTodoInLocalStorage = (
    todoKey,
    todoValue,
  ) => {
    return localStorage.setItem(
      `Todo ${todoKey}`,
      JSON.stringify(todoValue),
    );
  };
  return {
    settingTodoInLocalStorage,
  };
};

export const setTodoInLocalStorage = SetTodoInLocalStorage();


const GetTodoItemFromLocalStorage = () => {
  const todoListed = [];

  const gettingTodoItemFromLocalStorage = () => {
    for (let index = 0; index < localStorage.length; index++) {
      const parsedTodoListJson = JSON.parse(localStorage.getItem(`Todo ${index}`))
      todoListed.push(parsedTodoListJson);
    };
  };
  return {
    todoListed,
    gettingTodoItemFromLocalStorage,
  };
};


export const getTodoItemFromLocalStorage = GetTodoItemFromLocalStorage();
