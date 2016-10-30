import _ from 'lodash';

import * as resourceMath from '../../utils/resourceMath';

import popConfigs from '../../gameConfig/popTypes';
import facConfigs from '../../gameConfig/factories';
import resConfigs from '../../gameConfig/resources';

const facConfigsOrdered = _.orderBy(facConfigs, 'priority', 'desc');

export const cycleCities = function(
  { commit, dispatch, getters }
  ) {
  const citiesDemand = getters.citiesDemand;
  const citiesRestockTarget = getters.citiesRestockTarget;

  _.each(getters.world.cities, (city, cityId) => {

    commit('updateCityForCycle', { cityId });

    commit('cityBuyResources', {
      cityId,
      target: citiesRestockTarget[cityId]
    });

    commit('cityConsumeResources', {
      cityId,
      demand: citiesDemand[cityId]
    });

    _.each(facConfigsOrdered, (facConfig, facKey) => {
      commit('cityFactoryProduction', {
        cityId,
        facKey,
        facConfig
      });
    });

    //this is the last step because it should not affect production
    commit('cityPopulationMigrate', {
      cityId,
      demand: citiesDemand[cityId],
    });
  });
};