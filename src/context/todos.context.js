import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  {id: 1, task: 'Finish project', completed: false},
  {id: 2, task: 'Apply to jobs', completed: false},
  {id: 3, task: 'Learn about Typescript', complete: false},
];

export const TodosContext = createContext();

export function TodosProvider(props){
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}