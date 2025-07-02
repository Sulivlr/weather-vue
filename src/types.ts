
export interface Cities {
    id: string;
    name: string
}

export interface City {
  [city: string]: Cities;
}

export interface ApiWeather {
  id: string;
  dt_txt: string;
  weather: {
    description: string;
    icon: string;
  }
  main: {
    humidity: string;
    windSpeed: string;
    temp: string;
    feels_like: string
  }
}
