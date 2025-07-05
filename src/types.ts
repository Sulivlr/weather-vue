export interface City {
  id: string;
  name: string;
}

export interface ForecastResponse {
  cod: string;
  city: {
    id: number;
    name: string;
  }
  list: list[];
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface list {
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Weather[];
  wind: {
    speed: number;
  }
}
