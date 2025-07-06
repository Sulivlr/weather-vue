import { createRouter, createWebHistory } from 'vue-router';
import WeatherCard from '@/features/cards/WeatherCard.vue';
import HourlyWeather from '@/features/cards/HourlyWeather.vue';
import NotFound from "@/features/notfound/NotFound.vue";
import WeeklyCard from "@/features/cards/WeeklyCard.vue";
import SearchInput from "@/features/input/SearchInput.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SearchInput,
  },
  {
    path: '/weather/:id',
    component: WeatherCard,
    children: [
      {
        path: 'hourly',
        component: HourlyWeather,
      }
    ]
  },
  {
    path: '/weather/:id/weekly',
    component: WeeklyCard
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
