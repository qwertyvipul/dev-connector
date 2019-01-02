import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profileActions';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getCurrentProfile();
    }

    render() {

        const {user} = this.props.auth;
        const {profile, loading} = this.props.profile;

        let dashboardContent = "";
        if(profile === null || loading){
            dashboardContent = <h4>Loading...</h4>;
        }else{
            dashboardContent = <h4>Your Profile</h4>
            if(Object.keys(profile).length > 0){
                
            }else{
                dashboardContent = (
                    <div className="user-profile">
                        <h2>Welcome {user.name}</h2>
                        <p>You have not setup a profile, please add some info.</p>
                        <Link to="/create-profile">
                            <button>Create Profile</button>
                        </Link>
                    </div>
                );
            }
        }

        return (
            <div className="Dashboard">
                <div className="container">
                    <h1>Dashboard.</h1>
                    {dashboardContent}
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
