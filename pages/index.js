import { useState } from 'react';
import Layout from '../src/components/Layout';
import Weather from '../src/components/Weather';
import SearchBox from '../src/components/SearchBox';

export default function Index() {
  const api = {
    key: 'fc15b46a5743ed2e35fe780ff7ff22ad',
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  };

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter" && query !== '') {
      fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result);
            checkWeatherBg(result);
            setQuery('');
            console.log({result})
        }).
        catch(e => console.log(e));
    }
  }

  return (
    <Layout>
      <h2>Weather App</h2>
      <SearchBox
        handleSearch={search}
        handleInput={setQuery}
        query={query}
      />
    {
      weather.main &&
        <Weather
          name={weather.name}
          country={weather.sys.country}
          temp={weather.main.temp}
          weather={weather.weather[0].main}
        />
    }
    </Layout>
  );
}
