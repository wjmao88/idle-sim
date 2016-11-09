import _ from 'lodash';

export const upgradeTech = function(
  state,
  { techKey, techConfig, resConfigs }
  ) {

  state.world.money -= techConfig.cost;

  state.world.technologies[techKey] = true;

  //too immediate, new keys are not recoginized
  state.world.technologies = { ...state.world.technologies };

  _.each(techConfig.unlockTechs, (newTech) => {
    if (!state.world.technologies[newTech]){
      state.world.technologies[newTech] = false;
    }
  });

  _.each(techConfig.unlockFactories, (facKey) => {
    _.each(state.world.cities, (city) => {
      city.factories[facKey] = {
          'level': 1,
          'cycles': 0,
          'workerCount': 0
      };
    });
  });

  _.each(techConfig.unlockResources, (resKey) => {
    _.each(state.world.cities, (city) => {
      city.warehouse[resKey] = 0;
      city.stockpile[resKey] = 0;
      city.prices[resKey] = resConfigs[resKey].cost;
    });
  });

};