import React from 'react';

import './signin.css';

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        //console.log(this.state);
        
        fetch('https://obscure-beyond-74380.herokuapp.com/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then( data => {
            //console.log(data);
            if( data.id){
                this.props.loadUser(data);
                this.props.onRouteChange('home')
            }else {
                console.log('Email or password is wrong');
            }
        })

          
        
    }

    render() {
        return (
            <div className="form_container" style={{boxShadow: '3px 3px 4px grey', borderRadius:'3px'}}>
                <form >
                    <h1>{'Sign in'}</h1>
                    <input 
                        onChange={this.onEmailChange} 
                        type="email" 
                        placeholder="Email" />
                    <input 
                        onChange= {this.onPasswordChange}
                        type="password" 
                        placeholder="Password" />
                    <button 
                        type='button' 
                        onClick={this.onSubmitSignIn}>Login</button>
                    <p  onClick={()=>this.props.onRouteChange('register')} className='btn ml-auto my-2 my-sm-0' style={{width: '150px', fontSize:'20px'}}>Register</p>
                    
                    
                </form>
            </div>
            
        );
    }
   
    
}
export default Signin;