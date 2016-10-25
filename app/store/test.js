var getStuff = function(cb){
    return $.get('getstuff', {}, cb);
};

var getStuffNoCB = function(){
    return $.get('getstuff', {});
};

var warn = function(a){
    console.warn('warn', a);
};

var log = function(a){
    console.log('log', a);
    return a
};

var err = function(a){
    console.error('err', a);
    return Promise.reject(a);
};

var logAndWarn = function(){
    getStuff(function(){
       warn();
       log();
    });
};

var actions = [];
var logAndWarn = function(){
    getStuff(function(){
        _.each(actions, function(a){
            a();
        });
    });
};

logAndWarn();

actions.push(log);
actions.push(warn);

var promised = function(){

    var promise = getStuffNoCB();

    console.log('call made');

    promise.then(
        function success(a){
            log(a);
            return a;
        },
        function error(a) {
            err(a);
            return Promise.reject(a);
        },
        function progress(a) {
            warn(a);
            return a;
        }
    );

    console.log('function end');
};

