import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

  renderWeather(cityData){
    const temp = cityData.list.map((weather)=>weather.main.temp);
    const humidity = cityData.list.map((weather)=>weather.main.humidity);
    const pressure = cityData.list.map((weather)=>weather.main.pressure);
    const {lon,lat}= cityData.city.coord;
      return (<tr key={cityData.city.name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temp} unit="K" color="red" />
        </td>
        <td><Chart data={pressure} unit="hPa" color="orange" /></td>
        <td><Chart data={humidity} unit="%" color="blue" /></td>
      </tr>);

  }

  render() {
    if(!this.props.weather){
      return <div>Loading.</div>
    }
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  }
}

export default connect(mapStateToProps)(WeatherList);
