import React from 'react'

const UserSummary = (props) => {
    const { user } = props;
    return(
        <div className="card z-depth-0 user-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{user.fistName}</span>
                <p>{user.lastName}</p>
                <p className="grey-text">{props.auth.email}</p>
            </div>
        </div>
    )
}

export default UserSummary;