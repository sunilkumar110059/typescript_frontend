import React from 'react'
import Login from './Login'

import { ProfileProps } from './Profile';

type PrivateProps = {
    isLoggedIn: boolean;
    Component: React.ComponentType<ProfileProps >;
    
}

function Private({ isLoggedIn,  Component }: PrivateProps) {

    if (isLoggedIn) {
        return <Component profileCom="Sunil Kumar" />
    }
    else {
        return <Login />
    }

}

export default Private