import styled from "@emotion/styled"
import React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
    return (
        <Main>
            <h1>Home Sweet Home 🏠</h1>
            <Link to="/login">로그인</Link>
            <Link to="/hello">여긴 로그인 해야 갈 수 있어요</Link>
        </Main>
    )
}

export default Home

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
