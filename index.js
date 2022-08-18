function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return function func() {
        console.log("hi")
    }
}

function returnsAnAnonymousFunction() {
    return (function () {
        console.log("hi")
    });
}