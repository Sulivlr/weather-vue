export interface City {
  id: string;
  name: string;
}

export interface ForecastResponse {
  id: string;
  weather: Weather[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
