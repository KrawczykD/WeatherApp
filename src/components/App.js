import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import Output from './Output.js'
import Icon from './Icon.js';

class App extends Component {

  state ={ 
    valueCity:"",
    valueCountry:"",
    name:"",
    country:"",
    temp:0,
    pressure:0,
    humidity:0,
    windSpeed:0,
    description:"",
    cloud:0,
    weatherIcon:"01d",
    dt : 0,
    err: false,
  }

  componentDidMount(){
      
      const API = `https://api.openweathermap.org/data/2.5/find?q=london,uk&units=metric&appid=c05e35c02eb506a7ae948a3bab7b61a2`;

      fetch(API).then(response => response.json()).then( data => {(
      this.setState({
        name:data.list[0].name,
        country:data.list[0].sys.country,
        temp:data.list[0].main.temp,
        pressure:data.list[0].main.pressure,
        humidity:data.list[0].main.humidity,
        windSpeed:data.list[0].wind.speed,
        description:data.list[0].weather[0].description,
        cloud: data.list[0].clouds.all,
        weatherIcon: data.list[0].weather[0].icon,
        // dt : data,
      })
   
    )})
  }


  handleControlValue=(e)=>{
      if(e.target.name === "city"){
        this.setState({
        valueCity : e.target.value,
    })}
      else if(e.target.name === "country"){
          this.setState({
          valueCountry : e.target.value,
        })}
  }

  handleSubmitCity = (e)=>{
    // || this.state.valueCountry !== "uk"
    if(!this.state.valueCity || !this.state.valueCountry){
      e.preventDefault()

      this.setState({
        err: true,
      })
    }
    else{
      const API = `https://api.openweathermap.org/data/2.5/find?q=${this.state.valueCity ? this.state.valueCity : "london" },${this.state.valueCountry ? this.state.valueCountry : "uk"}&units=metric&appid=c05e35c02eb506a7ae948a3bab7b61a2`;
      
      e.preventDefault()

      fetch(API).then(response => response.json()).then( resp => {if(resp.count === 0){ 
        this.setState({
          valueCity: "",
          valueCountry: "",
        })

        }
          
        return resp;
        } 
  
      )
    
    
    .then( data => {(
      this.setState({
        name:data.list[0].name,
        country:data.list[0].sys.country,
        temp:data.list[0].main.temp,
        pressure:data.list[0].main.pressure,
        humidity:data.list[0].main.humidity,
        windSpeed:data.list[0].wind.speed,
        description:data.list[0].weather[0].description,
        err: false,
        cloud: data.list[0].clouds.all,
        weatherIcon: data.list[0].weather[0].icon,
        dt : data.list[0],
      })
    )})
    
    .catch( err => this.setState({
      err: true,
    }) )}

    let data = (this.state.dt)
    console.log(data)

  }

  
  render() {
    
    return (
      <div>
          <div className="bgcOpacity" style={this.state.weatherIcon[2] === "d" ? {opacity:0.2} : {opacity:0.9}}></div>
          <div className="bgcCloud" style={this.state.cloud > 60 ? {opacity:0.60} :{opacity:this.state.cloud/100}}></div>
          <div className="container" >
            <Form 
            handleControlValue={this.handleControlValue} 
            controlValueCity={this.state.valueCity}
            controlValueCountry={this.state.valueCountry}
            handleSubmitCity={this.handleSubmitCity}
            />
            <Icon iconCode={this.state.weatherIcon}/>
            <Output 
            cityName={this.state.name}
            countryName={this.state.country}
            temp={this.state.temp}
            pressure={this.state.pressure}
            humidity={this.state.humidity}
            windSpeed={this.state.windSpeed}
            description={this.state.description}
            err={this.state.err}
            />
        </div>
      </div>
    );
  }
}

export default App;