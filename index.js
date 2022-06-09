function receivesAFunction(callBack){
    callBack();
}

function returnsANamedFunction () {
    return function namedfn() {
        console.log("This is a named function");
    };
}

function returnsAnAnonymousFunction() {
    return () => console.log("This is an un-named function");
}