import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks.js'
import SignedOutLinks from './signedOutLinks.js'
import { connect } from 'react-redux'



const Navbar = (props) => {
    const { auth } = props;
    //console.log(auth);
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Enersinc</Link>
                {links}            
            </div>
        </nav>
    )
}   

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
    
}


export default connect(mapStateToProps)(Navbar);