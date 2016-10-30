
export const breadcrumbs = (state) => {
  return state.route;
};

export const params = (state) => {
  return state.route.params;
};

export const world = (state) => {
    console.log('getter world');
  return state.world;
};

export const citiesInfo = (state, getters) => {
  return _.map(getters.world.cities, (city) => ({
    id: city.id,
    name: city.name,
    population: _.sum(_.map(city.population, 'total'))
  }));
};
