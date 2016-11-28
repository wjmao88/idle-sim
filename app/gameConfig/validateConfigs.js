import _ from 'lodash';

import popConfigs from './popTypes';
import facConfigs from './factories';
import resConfigs from './resources';
import techConfigs from './tech';

var techUnlocks = [];
var facUnlocks = [];
var resUnlocks = [];

const techs = _.keys(techConfigs);
const res = _.keys(resConfigs);
const facs = _.keys(facConfigs);

_.each(techConfigs, (tech) => {
    techUnlocks = _.union(techUnlocks, tech.unlockTechs);
    facUnlocks = _.union(facUnlocks, tech.unlockFactories);
    resUnlocks = _.union(resUnlocks, tech.unlockResources);
});

console.log('tech diffs');
console.log(_.difference(techUnlocks, techs).join(', '));
console.log('res diffs');
console.log(_.difference(resUnlocks, res).join(', '));
console.log('fac diffs');
console.log(_.difference(facUnlocks, facs).join(', '));