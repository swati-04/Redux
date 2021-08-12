import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
//store is a place to store data as action
const increment = () => {
  return {
    type: "INCREMENT"
  }
}
const decrement = () => {
  return {
    type: "DECREMENT"
  }
}
//reducer will tell us what is supposed to happen whwn we perform an action
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
  }
}
let store = createStore(counter)
store.subscribe(()=> console.log(store.getState()));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

