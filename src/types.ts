
export interface MainWeatherData {
  temp: number;
  feels_like: number;
  humidity: number;
}

export interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface City {
  id: number;
  name: string;
}

export interface ForecastItem {
  dt: number;
  main: MainWeatherData;
  weather: WeatherInfo[];
}

export interface ForecastResponse {
  cod: string;
  list: ForecastItem[];
  city: City;
}

export interface WeatherData {
  id: number;
  name: string;
  main: MainWeatherData;
  weather: WeatherInfo[];
  dt: number;
}

