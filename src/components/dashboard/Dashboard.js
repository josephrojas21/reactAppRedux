import React, { Component} from 'react'
import UsersList from '../users/UsersList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
    render(){
        //console.log(this.props);
        const { users, auth } = this.props;

        if( !auth.uid)return <Redirect to='/signin'/>
        
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <UsersList users={users}/>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    //console.log(state);
    
    return {
        users: state.firestore.ordered.users,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(Dashboard);