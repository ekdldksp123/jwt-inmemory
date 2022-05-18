import styled from "@emotion/styled"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "../components/layout/default"
import { login } from "../libs/auth"
import { useStore } from "../libs/store"

type LoginForm = {
    id: string,
    password: string
}

const Login: React.FC = () => {
    const initForm: LoginForm = {id:'', password:''}
    const [form, setForm] = useState<LoginForm>(initForm)
    const state = useStore(state => state)
    let navigate = useNavigate();

    const handleOnChange = (e: any) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        handleLogin(form)
    }

    const handleLogin = ({id, password}: LoginForm) => {
        let token = login(id, password)
    
        if(token) {
            state.setToken({...token})
            console.log(token)
            navigate('/hello')
        } else {
            alert('로그인 실패')
        }
        setForm({...initForm})
      }
    
    return (
        <Container>
            <form>
                <InputBox>
                    <Label>ID</Label>
                    <Input type="text" name="id" onChange={(e) =>handleOnChange(e)} value={form.id} />
                </InputBox>
                <InputBox>
                    <Label>Password</Label>
                    <Input type="password" name="password" onChange={(e) => handleOnChange(e)} value={form.password}/>
                </InputBox>
                <button type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
            </form>
        </Container>
    )
}

export default Login

const InputBox = styled.section`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
`

const Label = styled.label`
    width: 40%;
    text-align: left;
`

const Input = styled.input`
    width: 60%;
`