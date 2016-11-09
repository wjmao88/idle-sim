import Vue from 'vue';
import VueRouter from 'vue-router';

import WorldPage from './components/WorldPage.vue';
import CityPage from './components/CityPage.vue';
import TechnologyPage from './components/TechnologyPage.vue';
import TechsCompletedPage from './components/TechsCompletedPage.vue';
import TechsAvailablePage from './components/TechsAvailablePage.vue';
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
  path: 'city/:cityId',
  component: CityPage,
  children: [
    {
      name: 'city',
      path:'',
      redirect:'consumptions'
    },
    consumptions,
    productions
  ]
};

const world = {
  name: 'world',
  path: 'world',
  component: WorldPage,
};

const completedTechs = {
  name: 'completedTechs',
  path: 'completed-techs',
  component: TechsCompletedPage
};

const availableTechs = {
  name: 'availableTechs',
  path: 'available-techs',
  component: TechsAvailablePage
};

const technology = {
  path: 'technology',
  component: TechnologyPage,
  children: [
    {
      name: 'technology',
      path:'',
      redirect:'available-techs'
    },
    completedTechs,
    availableTechs
  ]
};

const rootPath = {
  path: '/',
  component: MainPage,
  children: [
    {
      name: 'root',
      path: '',
      redirect: 'world'
    },
    city,
    world,
    technology
  ]
};

const router = new VueRouter({
  routes: [
    rootPath
  ]
});

export default router;

