import React, { useReducer } from 'react';
import { initialState, reducer } from './libs/store';
import { login } from './libs/auth';
import 'normalize.css';
import Router from './components/router';

const App:React.FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const { authenticated } = state

  return <Router />
}

export default App;
