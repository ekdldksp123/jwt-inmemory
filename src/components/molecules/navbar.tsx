/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
    return (
        <Nav>
            <div className="nav-wrapper" css={navWrapper}>
                <Logo>
                    <Link to='/'><i className="fa fa-angellist"></i>JWT inmemory</Link>
                </Logo>

                <ul>
                    <li><Link className='menu' to='/'>Home</Link></li>
                    <li><Link className='menu' to='/login'>Login</Link></li>
                    <li><Link className='menu'to='/hello'>Hello</Link></li>
                </ul>
            </div>
        </Nav>
    )
}

export default NavBar

const Nav = styled.nav`
    background: white;
    color: rgb(13, 26, 38);
    position: fixed;
    top: 0;
    height: 60px;
    line-height: 60px;
    width: 100vw;
    z-index: 10;

    & ul {
        display: inline-block;
        float: right;
        list-style: none;
        margin-top: -2px;
        text-align: right;
        transition: transform 0.5s ease-out;
        -webkit-transition: transform 0.5s ease-out;
    }

    & li {
        display: inline-block;

        & .menu {
            color: rgb(13, 26, 38);
            display: block;
            font-size: 0.7em;
            height: 50px;
            letter-spacing: 1px;
            margin: 0 20px;
            padding: 0 4px;
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
            transition: all 0.5s ease;
            -webkit-transition: all 0.5s ease;
        }

        & .menu:hover {
            color: rgb(28, 121, 184);
            transition: all 1s ease;
            -webkit-transition: all 1s ease;
        }

        & .menu:before, .menu:after {
            content: '';
            position: absolute;
            width: 0%;
            height: 1px;
            bottom: -1px;
            background: rgb(13, 26, 38);
        }

        & .menu:before {
            left: 0;
            transition: 0.5s;
        }

        & .menu:after {
            background: rgb(13, 26, 38);
            right: 0;
        }

        & .menu:hover:before {
            background: rgb(13, 26, 38);
            width: 100%;
            transition: width 0.5s cubic-bezier((0.22, 0.61, 0.36, 1));
        }

        & .menu:hover:after {
            background: transparent;
            width: 100%;
        }
    }

`

const navWrapper = css`
    margin: auto;
    text-align: center;
    width: 70%;

    @media(max-width: 768px) {
        width: 90%;
    }

    @media(max-width: 638px) {
        width: 100%;
    }
`

const Logo = styled.div`
    float: left;
    margin-left: 28px;
    font-size: 1.5em;
    height: 60px;
    letter-spacing: 1px;
    text-transform: uppercase;
`