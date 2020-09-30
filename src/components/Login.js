import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import './loginstyle.css';
import { doLogin } from '../actions'
import { connect } from 'react-redux';
class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
                email: '',
                password: '',
                status: ''
            };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state
        const payload = { email, password };
        if(payload.email === 'test@gmail.com' && payload.password === 'test1234'){
            this.props.doLogin(payload);
        }
         const history = createBrowserHistory();
         history.push('#/Home');
        window.location.reload();
       
        // await api.loginService(payload).then(res => {
        //     if(res.status === 200 && res.data.login === true ){ 
        //        history.push('/loginsuccess');
        //        window.location.reload();
        //        return;
        //     }else if(res.status === 200 && res.data.login === false ){ 
        //         history.push('/loginfailure');
        //         window.location.reload();
        //         return;
        //     }else{
        //         history.push('/loginfailure')
        //     }
        //     this.setState({
        //         email: '',
        //         password: '',
        //     })
        // })
    };

    
    render() {
        return (
            <div className="login-page">
            <div className="login-form">
                <div className="logo"></div>
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                    <span className="form-label">Email</span>
                    <input className="email"
                        onChange={e => this.setState({email :e.target.value})} />

                    <span className="form-label">Password</span>
                    <input className="password"
                        type="password"
                        onChange={e => this.setState({ password: e.target.value})} />

                    <button className="login-button" type="submit">SignIn</button>
                </form>
            </div>

        </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      doLogin: payload => dispatch(doLogin(payload))
    };
  }

  
const Login = connect(
    null,
    mapDispatchToProps
  )(LoginForm);
  

export default Login
