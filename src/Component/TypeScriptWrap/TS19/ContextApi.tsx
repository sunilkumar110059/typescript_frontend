import React, { createContext, useState } from 'react';


export const MyContext = createContext({} as UserContextType)

type AuthUser = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number;
    website: string;
    isLogin: boolean;
}


type UserContextType = {
    Users: AuthUser[];
    SetUserFn: React.Dispatch<React.SetStateAction<AuthUser[]>>
}

type ContextApiProps = {
    children: React.ReactNode
}

function ContextApi({ children }: ContextApiProps) {

    const [Users, SetUserFn] = useState<AuthUser[]>([])
    
    return (
        <MyContext.Provider value={{ Users, SetUserFn }}>
            {children}
        </MyContext.Provider>
    )
}
export default ContextApi

