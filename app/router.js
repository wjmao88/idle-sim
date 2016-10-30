import Vue from 'vue';
import VueRouter from 'vue-router';

import WorldPage from './components/WorldPage.vue';
import CityPage from './components/CityPage.vue';
import ResearchPage from './components/ResearchPage.vue';
import MainPage from './components/MainPage.vue';
import CityConsumptions from './components/CityConsumptions.vue';
import CityProductions from './components/CityProductions.vue';

import store from './store';

Vue.use(VueRouter);

const consumptions = {
  name: 'consumptions',
  path: 'consumptions',
  component: CityConsumptions
};

const productions = {
  name: 'productions',
  path: 'productions',
  component: CityProductions
};

const city = {
  name: 'city',
  path: 'city/:cityId',
  component: CityPage,
  children: [
    //{ path:'', redirect:'population' },
    consumptions,
    productions
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

