import { Tokens } from './auth';
import create from 'zustand'

export interface AuthProps {
    authenticated: boolean,
    token?: Tokens,
    setToken: (token: Tokens) => void
    deleteToken: () => void
}
export const useStore = create<AuthProps>(
    set => ({
        authenticated: false,
        token: undefined,
        setToken: (jwt:Tokens) => set(state => ({authenticated: true, token: jwt})),
        deleteToken: () => set(state => ({authenticated: false, token: undefined}))
    }),
)
