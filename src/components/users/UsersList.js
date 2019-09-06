import React from 'react'
import UserSummary from './UserSummary'
import { connect } from 'react-redux'


const UsersList = (props) => {
    const { users, auth } = props;
    return(
        <div className="section">
            {users && users.map(user =>{
                return(
                   <UserSummary user={user} auth={auth} key={user.id} />
                
                )
            })}
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
    
}


export default connect(mapStateToProps)(UsersList);
