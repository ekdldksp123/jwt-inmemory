import Cookies from "universal-cookie"

const cookies = new Cookies()
export interface AuthResponse {
    result: Tokens
}

export interface Tokens {
    accessToken: string,
    refreshToken: string
}

const dummyToken =`{
    "result": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTI5MTY0NTAsInRva2VuVHlwZSI6MSwiZXhwIjoxNjUyOTE4MjUwLCJpc3MiOiJodHRwczovL3Rlc3Qtand0LmNvbSJ9.Ej32gCE0MR2tHmvxFQ8ZRk8T8Wf4LlN9iU2_Q5c9r5g",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTI5MTY0NTAsInRva2VuVHlwZSI6MTAxLCJ1dWlkIjoiY2JkNzE3MTgtYzc4OS00Njg5LTkwZjYtZmU5OGM2OTU1MmMzIiwiZXhwIjoxNjUyOTIwMDUwLCJpc3MiOiJodHRwczovL3Rlc3Qtand0LmNvbSJ9.mxRplbJHACxN4euo3udXLufCFM5N_Wvn9p3tWvtWlUY"
    }
}`

const getTokens = () => {
    const authToken = JSON.parse(dummyToken) as AuthResponse
    return authToken.result
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
    cookies.set('access_token', token.accessToken, { 
        sameSite: 'strict',
        path: '/',
        expires: new Date(new Date().getTime() + 5 * 60000) 
    })
    cookies.set('refresh_token', token.refreshToken, { 
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
