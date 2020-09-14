import React from 'react';


class  Register extends React.Component {
    constructor(props){
        super();
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: ''
        }
    }

    onNameChange = (event) => {
        this.setState({registerName: event.target.value})
    }


    onEmailChange = (event) => {
        this.setState({registerEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({registerPassword: event.target.value})
    }

    onSubmitRegister = () => {
        //console.log(this.state);
        
        fetch('https://obscure-beyond-74380.herokuapp.com/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword
            })
        })
        .then(response => response.json())
        .then( data => {
            //console.log(data);
            if( data.id){
                //console.log(data);
                this.props.loadUser(data);
                this.props.onRouteChange('home')
            }else{
                console.log('incorrect form submit');
            }
        })

          
        
    }

    
    render(){
        return (
            <div className="form_container" style={{boxShadow: '3px 3px 4px grey', borderRadius:'3px'}}>
                <form >
                    <h1>{'Register'}</h1>
                    <input onChange={this.onNameChange} id="name" type="text" placeholder="Name" />
                    <input onChange={this.onEmailChange} id="email" type="email" placeholder="Email" />
                    <input onChange={this.onPasswordChange} id="password" type="password" placeholder="Password" />
                    <button 
                        type='button' 
                        onClick={this.onSubmitRegister}>Register</button>
                    
                    
                    
                </form>
            </div>
            
        );
    }
    
}
export default Register;