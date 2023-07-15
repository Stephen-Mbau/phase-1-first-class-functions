function receivesAFunction (add) {
    return add()
}
receivesAFunction(function(){return a+b})
function returnsANamedFunction () {
    function name(adjective) {
        return `He is a ${adjective}!`
    }
    return name;
}
function returnsAnAnonymousFunction () {
    return function (unNamed) {return "hello"}
}