import Vue from 'vue';
import VueRouter from 'vue-router';

import WorldPage from './components/WorldPage.vue';
import CityPage from './components/CityPage.vue';
import ResearchPage from './components/ResearchPage.vue';
import MainPage from './components/MainPage.vue';
import CityPopulation from './components/CityPopulation.vue';
import CityFactories from './components/CityFactories.vue';

import store from './store';

Vue.use(VueRouter);

const population = {
  name: 'population',
  path: 'population',
  component: CityPopulation
};

const factories = {
  name: 'factories',
  path: 'factories',
  component: CityFactories
};

const city = {
  name: 'city',
  path: 'city/:cityId',
  component: CityPage,
  children: [
    //{ path:'', redirect:'population' },
    factories,
    population
  ]
};

const world = {
  name: 'world',
  path: 'world',
  component: WorldPage,
};

const research = {
  name: 'research',
  path: 'research',
  component: ResearchPage
};

const rootPath = {
  path: '/',
  component: MainPage,
  children: [
    { path: '', redirect: 'world' },
    city,
    world,
    research
  ]
};

const router = new VueRouter({
  routes: [
    rootPath
  ]
});

export default router;

