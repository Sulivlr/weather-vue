import { createRouter, createWebHistory } from 'vue-router';
import SearchPage from '../features/search/SearchPage.vue';
import WeatherCard from '@/features/cards/WeatherCard.vue';
import HourlyWeather from '@/features/cards/HourlyWeather.vue';
import NotFound from "@/features/notfound/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SearchPage,
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
