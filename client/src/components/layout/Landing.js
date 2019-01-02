import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

class Landing extends Component {

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div>
                <div className="Landing">
                    <h1>This is the landing page.</h1>
                    <Link to="/register"><button>Sign Up</button></Link>
                    <Link to="/login"><button>Log In</button></Link>
                </div><hr/>
            </div>
        )
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps)(Landing);
