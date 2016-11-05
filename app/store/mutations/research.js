import _ from 'lodash';

export const upgradeTech = function(
  state,
  { techKey, techConfig }
  ) {

  state.world.moey -= techConfig.cost;
  state.world.technologies[techKey] = true;

  _.each(techConfig.unlocks, (facKey) => {
    _.each(state.world.cities, (city) => {
      city.factories[facKey] = {
          'level': 1,
          'cycles': 0,
          'workerCount': 0
      };
    });
  });

  _.each(techConfig.unlockTechss, (newTech) => {
    if (!state.world.technologies[newTech]){
      state.world.technologies[newTech] = false;
    }
  });
};