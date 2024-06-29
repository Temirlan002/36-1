import React, { useState } from "react";
import userIcon from './userIcon.png'

const UsersCard = ({userInfo}) => {

    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const address = userInfo.address


    return (
        <div style={{width: '400px', padding: '8px 20px'}}>
            <img style={{width: '100%'}} alt="" src={userIcon} />
            <h1>{userInfo.name}</h1>
            <p>{userInfo.username}</p>
            <p>{userInfo.email}</p>
            
            <button onClick={() => setShowMoreInfo(!showMoreInfo)}>more info</button>
            {showMoreInfo && <div>
                <p>{address.street }</p>
                <p>{address.suite}</p>
                <p>{address.city}</p>
                <p>{address.zipcode }</p>
            </div>}
        </div>
    )
}

export default UsersCard;