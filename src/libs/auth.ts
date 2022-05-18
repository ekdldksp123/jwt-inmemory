export interface Tokens {
    access_token?: string,
    refresh_token?: string
}

export const login = (id:string, password:string) => {
    if(id === 'rest' && password === 'test') {
        return {
            access_token: 'jx84e3kjew1njej3al2q9w',
            refresh_token: 'g2rjfd7452bjfgn;a&*(jkehj',
        } as Tokens
    } else {
        return undefined
    }
}

