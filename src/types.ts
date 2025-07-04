export interface City {
  id: string;
  name: string;
}

export interface ForecastResponse {
  id: string;
  name: string;
  weather: Weather[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  }
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
