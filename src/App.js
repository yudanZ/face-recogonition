import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Background from './components/Background/Background';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    const {id, name, email, entries, joined } = data;
    this.setState( {user: {
      id : id,
      name: name,
      email: email,
      entries: entries,
      joined: joined
    
    }})
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    //console.log(clarifaiFace);
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
    //console.log(width);
    //console.log(height);
  }

  displayFaceBox = (box) => {
    //console.log(box);
    this.setState({ box: box})
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
    //console.log(event.target.value);
  }

  onRouteChange = (route) => {
    //props.event.preventDefault();
    //console.log('here');
    if( route === 'signout'){
      this.setState(initialState)
    }else if( route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})

  }

  onButtonSubmit = (event) => {

    event.preventDefault();
    this.setState({imageUrl:this.state.input});
    fetch('https://obscure-beyond-74380.herokuapp.com/imageUrl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response =>{
        if(response){
          fetch('https://obscure-beyond-74380.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then( count => {
            this.setState(Object.assign(this.state.user, {entries: count}))
          })
          .catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
        //console.log(response);
      })
      .catch( err => console.log(err));
   
  }
  render(){
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        
        <Navigation isSignedIn = {isSignedIn} onRouteChange = {this.onRouteChange}/>
        { route === 'home' ?

            <div>
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={box} imageUrl={imageUrl}/>

            </div>
            : ( route === 'signin' ? 
                <Signin loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
                :
                <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
            
            )
        
      }
        <Background className="background-animation" />
      </div>
    );
  }
  
}

export default App;
