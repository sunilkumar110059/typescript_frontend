import React from 'react'

export type ProfileProps = {
    profileCom: string
}
function Profile({ profileCom }: ProfileProps) {
    return (
        <div className='cover'>
            <h1>Private to Profile Component. Name is <span className='color3_1'>{profileCom}</span></h1>
        </div>
    )
}

export default Profile