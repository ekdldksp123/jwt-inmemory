import React, { useReducer } from 'react';
import { initialState, reducer } from './libs/store';
import { login } from './libs/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
