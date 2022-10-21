import React, { createContext } from 'react';
import { UserData } from './UserData'

type createContextType = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number;
    website: string;
    isLogin: boolean;
}
export const MyContext = createContext<createContextType[]>(UserData)

type ContextApiProps = {
    children: React.ReactNode
}

function ContextApi({ children }: ContextApiProps) {
    return (
        <MyContext.Provider value={UserData}>
            {children}
        </MyContext.Provider>
    )
}
export default ContextApi

