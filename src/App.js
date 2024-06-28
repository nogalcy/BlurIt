import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ParticlesBg from 'particles-bg';
import './App.css';

const initialState = {
  input: '',
  imageurl: '',
  box: [],
  route: 'SignIn',
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageurl: '',
      box: [],
      route: 'SignIn',
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (result) => {
    const regions = result.outputs[0].data.regions;
    const boxArray = [];
    const image = document.getElementById('inputimage');
    const widthImage = Number(image.width);
    const heightImage = Number(image.height);

    regions.forEach(region => {
      const boundingBox = region.region_info.bounding_box;
      const topRow = boundingBox.top_row.toFixed(3) * heightImage;
      const leftCol = boundingBox.left_col.toFixed(3) * widthImage;
      const bottomRow = heightImage - (boundingBox.bottom_row.toFixed(3) * heightImage);
      const rightCol = widthImage - (boundingBox.right_col.toFixed(3) * widthImage);
      boxArray.push({leftCol: leftCol,
                    topRow: topRow,
                    rightCol: rightCol,
                    bottomRow: bottomRow
                  })
    })
    return boxArray;
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  
  onButtonSubmit = () => {
    this.setState({imageurl: this.state.input})
    fetch('https://blurit-api.onrender.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          input: this.state.input
      })
    })
    .then(response => response.json())
    .then(result => {
      if (result && result.outputs) {

        fetch('https://blurit-api.onrender.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              id: this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count}))
          })
          .catch(err => console.log(err));
      }
      this.displayFaceBox(this.calculateFaceLocation(result));
    })
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === "SignOut") {
      this.setState(initialState);
      this.setState({route: 'SignIn'});
      return;
    } else if (route === "Home") {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageurl, route, box } = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} color="#554994" num={100}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'Home'
          ? <div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageInputForm onInputChange={this.onInputChange} 
                            onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={box} imageurl={imageurl}/>
          </div>
          : (
            route === 'SignIn' 
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
