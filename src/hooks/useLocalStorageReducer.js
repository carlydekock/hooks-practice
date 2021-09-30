import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultVal, reducer){
  //make piece of state, based off of value in localStorage or default
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    } catch(err) {
      value = defaultVal;
    }
    return value;
  });

  //use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state)); //eslint-disable-next-line
  }, [state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;