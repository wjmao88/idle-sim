export default function mergeResourceMaps (method){
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