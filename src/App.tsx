import React, { useReducer } from 'react';
import { initialState, reducer } from './libs/store';
import { login } from './libs/auth';
import 'normalize.css';
import Router from './components/router';

const App:React.FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const { authenticated } = state

  const handleLogin = (id:string, password:string) => {
    let token = login(id, password)

    if(token) {
      console.log('로그인 성공!')
      dispatch({
        type: 'SET_TOKEN',
        token: token,
        result: true
      })
    } else {
      console.log('로그인 실패')
      dispatch({
        type: 'SET_TOKEN',
        token: null,
        result: false
      })
    }
  }

  return <Router user={authenticated} />
}

export default App;
