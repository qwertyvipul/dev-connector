import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
// import axios from 'axios';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        // axios.post('/api/users/register', newUser)
        // .then(res => console.log(res.data))
        // .catch(err => this.setState({errors: err.response.data}));
        //.catch(err => console.log(err.response.data));
        // console.log(newUser);

        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        // const {user} = this.props.auth;
        const {errors} = this.state; //const errors = this.state.errors;
        return (
            <div>
                <div className="Register">
                    <h1>This is the Register page.</h1>
                    <form className="register-form" onSubmit={this.onSubmit}>
                        <TextFieldGroup
                            name="name"
                            label="Name: "
                            placeholder="Name"
                            type="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            error={errors.name}
                        />
                        <TextFieldGroup
                            name="email"
                            label="Email: "
                            placeholder="Email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                        />
                        <TextFieldGroup
                            name="password"
                            label="Password: "
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password}
                        />
                        <TextFieldGroup
                            name="password2"
                            label="Confirm Password: "
                            placeholder="Confirm Password"
                            type="password"
                            value={this.state.password2}
                            onChange={this.onChange}
                            error={errors.password2}
                        />
                        <button type="submit" id="register-button">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
