import Cookies from "universal-cookie"

const cookies = new Cookies()
export interface Tokens {
    access_token?: string,
    refresh_token?: string
}

const getTokens = () => {
    return {
        access_token: 'jx84e3kjew1njej3al2q9w',
        refresh_token: 'g2rjfd7452bjfgn;a&*(jkehj',
    } as Tokens
}

export const login = (id:string, password:string) => {
    if(id === 'rest' && password === 'test') {
        const jwtTokens = getTokens()
        setTokensToCookie(jwtTokens)
        return jwtTokens
    } else {
        return undefined
    }
}

const setTokensToCookie = (token: Tokens) => {
    cookies.set('access_token', token.access_token, { 
        sameSite: 'strict',
        path: '/',
        expires: new Date(new Date().getTime() + 5 * 60000) 
    })
    cookies.set('refresh_token', token.refresh_token, { 
        sameSite: 'strict',
        path: '/',
        expires: new Date(new Date().getTime() + 5 * 60000) 
    })
}

export const deleteAccessTokenFromCookie = () => {
    cookies.remove('access_token')
}

export const deleteRefreshTokenFromCookie = () => {
    cookies.remove('refresh_token')
}

export const deleteJwtTokensFromCookie = () => {
    cookies.remove('access_token')
    cookies.remove('refresh_token')
}
