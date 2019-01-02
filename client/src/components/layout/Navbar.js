import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {logoutUser} from '../../actions/authActions';
import {clearCurrentProfile} from '../../actions/profileActions';

class Navbar extends Component {

    onLogoutClick(e){
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser(); 
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const guestLinks = (
            <div className="guestLinks">
                <Link to="/register"><button className="sign-up">Sign Up</button></Link>
                <Link to="/login"><button className="log-in">Log In</button></Link>
            </div>
        );

        const authLinks = (
            <div className="authLinks">
                <img src={user.avatar} alt={user.name} style={{width: '25px'}}/>
                <a href="#" onClick={this.onLogoutClick.bind(this)} className="logout-link">
                    <button className="logout">Logout</button>
                </a>
            </div>
        );
        return (
            <div>
                <div className="Navbar">
                    <Link to="/dashboard"><button className="dev-connector">Dev Connector</button></Link>
                    {isAuthenticated ? authLinks : guestLinks}
                </div><hr/>
            </div>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(Navbar);