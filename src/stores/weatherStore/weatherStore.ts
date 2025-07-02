
import {defineStore} from "pinia";
import {ref} from "vue";
import axiosApi from "@/axiosApi.ts";
import type {ForecastResponse, City, WeatherData} from "@/types.ts";

export const useWeatherStore = defineStore('weatherStore', () => {
  const items = ref<City[]>([]);
  const oneWeather = ref<WeatherData | null>(null);
  const isFetching = ref(false);
  const isSearching = ref(false);

  const fetchCities = async (cityName: string): Promise<City | null> => {
    isSearching.value = true;
    try {
      const {data} = await axiosApi.get<ForecastResponse | null>(`/forecast?appid=5f752d58b77db9b3d3faa06003260874&q=${cityName}`);
      if (data === null) {
        return null;
      }
      const city = data.city;

      const existingCity = items.value.find(item => item.id === city.id);
      if (!existingCity) {
        items.value.push(city);
      }

      return city;
    }  finally {
      isSearching.value = false;
    }
  };

  const fetchOneCity = async (id: string) => {
    isFetching.value = true;
    try {
      const {data} = await axiosApi.get<WeatherData | null>(`weather?appid=5f752d58b77db9b3d3faa06003260874&id=${id}`);
      if (data === null) {
        return [];
      }
      oneWeather.value = data;
      return data;
    } finally {
      isFetching.value = false;
    }
  };

  return {
    items,
    oneWeather,
    isFetching,
    isSearching,
    fetchCities,
    fetchOneCity,
  };
});
