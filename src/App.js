import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './home/NavBar.js'
import MainBody from './home/MainBody.js'

class App extends Component {
  state = {
        places: [],
        placesOldOne: [],
        position: null
    }

  render() {
      let _this = this
      const fillPlacesData = () => {
        // radius rage 100000
        let _url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.position.lat},${this.state.position.lon} &radius=100000&type=restaurant&keyword=cruise&key=AIzaSyCJoS8DZCl1e3T3C4BzF8xOJKHdcRaYlRM`
        axios.get(_url).then(r => {
          let rt = r.data.results.map((a) => {
              if(a.rating) return a
          })  
          let ratedPlaces = rt.filter((a) => {
              if(a) return a
          })  
          console.log(ratedPlaces)
          _this.setState({places: ratedPlaces})
        })
      }
      const filterByRate = () => {
        if(this.state.placesOldOne.length === 0) {
            let filtered = this.state.places.sort((a, b) => { return b.rating - a.rating})
            this.setState({placesOldOne: this.state.places})
            this.setState({places: filtered})
        }
        else {
            this.setState({placesOldOne: []})
            fillPlacesData()
        }
      }
      
      navigator.geolocation.getCurrentPosition(function(pos) {
          let position = {
              lat: pos.coords.latitude,
              lon: pos.coords.longitude
          };
          _this.setState({position});
          fillPlacesData();
      });  
      
    return (
      <div className="App">
        <NavBar fn={filterByRate} ac={this.state.placesOldOne.length === 0}></NavBar>
        <MainBody places={this.state.places}></MainBody>
      </div>
    );
  }
}

export default App;