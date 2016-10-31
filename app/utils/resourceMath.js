import _ from 'lodash';

export const operation = function(method){
  return function(...collections){
    return _.chain(collections)
    .flatMap(_.keys)
    .uniq()
    .keyBy(_.identity)
    .mapValues(function(key){
      var values = _.map(collections, key);
      return method(...values);
    })
    .value();
  };
};

export const ratio = operation((top, bottom) => {
  if (!bottom) {
    return Infinity;
  } else if (!top) {
    return 0;
  } else {
    return Math.floor(top/bottom);
  }
});

export const sum = operation((...values) => {
  return _.sum(values);
});

export const min = operation((...values) => {
  return Math.min(...(_.map( values, value => value || 0 )));
});

export const max = operation((...values) => {
  return Math.max(...(_.map( values, value => value || 0 )));
});

export const subtract = operation((left, right) => {
  return (left || 0) - (right || 0);
});

export const multiply = operation((val, multiple) => {
  return (val || 0) * (multiple || 0);
});

export const scale = function(collection, multiple){
  return _.mapValues(collection, (val) => {
    return (val || 0) * multiple;
  });
};

export const mapSumValues = function (mapOfMaps) {
  return _.mapValues(mapOfMaps, (map) => {
    return sum(...(_.values(map)));
  });
};