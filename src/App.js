import React,{Component} from 'react';
import Info from './info';
import Form from './form';
import Weather from './weather';
import './App.css'


const API_KEY='d2f88e89d6b7d2466bc938da0a237f7a';
// 82b797b6ebc625032318e16f1b42c016

export default class App extends Component{
    state={
        currentTemp:undefined,
        minTemp:undefined,
        maxTemp:undefined,
        city:undefined,
        sunrise:undefined,
        sunset:undefined,
        main:undefined,
        description:undefined,
        error:undefined
    };


    gettingWeather= async (e)=>{
        e.preventDefault();
        const city=e.target.elements.city.value;

        if (city){
            try {
                const api_url = await
                    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                const data = await api_url.json();
                // console.log(data);
                this.setState({
                    currentTemp:data.main.temp.toFixed(0),
                    minTemp:data.main.temp_min.toFixed(0),
                    maxTemp:data.main.temp_max.toFixed(0),
                    city:data.name,
                    sunrise:new Date(data.sys.sunrise*1000).toLocaleTimeString().slice(3),
                    sunset:new Date(data.sys.sunset*1000).toLocaleTimeString().slice(3),
                    main:data.weather[0].main,
                    description:data.weather[0].description,
                    error:''
                });
            }
            catch (e) {
                this.setState({
                    error:"Uncorrect city name"
                });
                console.info(e.toString())
            }
        }
        else {
            this.setState({
                error:"Enter city"
            })
        }
    };


    render() {
        return (
            <div className='wrapper'>
                <div className="main">
                    <div className="container">
                        <div className="Row">
                            <div className='info'>
                                <Info/>
                            </div>
                            <div className='form'>
                                <Form gettingWeather={this.gettingWeather}/>
                                <Weather
                                    currentTemp={this.state.currentTemp}
                                    minTemp={this.state.minTemp}
                                    maxTemp={this.state.maxTemp}
                                    city={this.state.city}
                                    country={this.state.country}
                                    sunrise={this.state.sunrise}
                                    sunset={this.state.sunset}
                                    main={this.state.main}
                                    description={this.state.description}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}