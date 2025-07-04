
import {defineStore} from "pinia";
import {ref} from "vue";
import axiosApi from "@/axiosApi.ts";
import type {ForecastResponse, City} from "@/types.ts";

export const useWeatherStore = defineStore('weatherStore', () => {
  const items = ref<City[]>([]);
  const oneWeather = ref<ForecastResponse | null>(null);
  const isFetching = ref(false);
  const isSearching = ref(false);

  const fetchCity = async (cityName: string) => {
    isSearching.value = true;
    try {
      const {data: city} = await axiosApi.get<City | null>(`/weather?&appid=5f752d58b77db9b3d3faa06003260874&q=${cityName}`);
      if (city === null) {
       return null;
     }
     items.value = [city];
     return city;
    } finally {
      isSearching.value = false;
    }
  };

  const fetchOneCity = async (id: number) => {
    isFetching.value = true;
    try {
      const {data} = await axiosApi.get<ForecastResponse | null>(`/forecast?appid=5f752d58b77db9b3d3faa06003260874&id=${id}&units=metric`
      );
      if (data === null) {
        return null;
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
    fetchCity,
    fetchOneCity,
  };
});
