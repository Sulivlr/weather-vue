import {defineStore} from "pinia";
import {ref} from "vue";
import type {ApiWeather, City} from "@/types.ts";
import axiosApi from "@/axiosApi.ts";

export const useWeatherStore = defineStore('weatherStore', () => {
  const items = ref<City[]>([]);
  const oneWeather = ref<ApiWeather | null>(null);
  const isFetching = ref(false);
  const isSearching = ref(false);

  const fetchCities = async (cityName: string) => {
    isSearching.value = true;
    try {
      const {data: city} = await axiosApi.get<City | null>(`/forecast?appid=5f752d58b77db9b3d3faa06003260874&q=${cityName}`);

      if (city === null) {
        return [];
      }
      return city
    } finally {
      isSearching.value = false;
    }
  };


  const fetchOneCity = async (id: string) => {
    isFetching.value = true;
    try {
      const {data: weather} = await axiosApi.get<ApiWeather | null>(`forecast?appid=5f752d58b77db9b3d3faa06003260874&id=${id}`);
      if (weather === null) {
        return [];
      }
      oneWeather.value = weather;
      return weather;
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

