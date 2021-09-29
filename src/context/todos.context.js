import React, { createContext,useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  {id: 1, task: 'Finish project', completed: false},
  {id: 2, task: 'Apply to jobs', completed: true},
  {id: 3, task: 'Learn about Typescript', completed: false},
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
  const [ todos, dispatch ] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}> 
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}