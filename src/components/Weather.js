import { dateBuilder } from '../utils';

const Weather = (props) => {
  const {name, country, temp, weather} = props;

  return (
    <div>
      <div className="location-box">
        <div className="location">{name}, {country}</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">
          { Math.round(temp) } C°
        </div>
        <div className="weather">
          {weather}
        </div>
      </div>
    </div>
  );
}

export default Weather;