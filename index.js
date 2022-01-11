function receivesAFunction(Spy) {
    Spy();
    return Spy;
};

receivesAFunction(function () {return 1 + 2; });

function returnsANamedFunction() {
    return function Alpha() {
        return `I am the Alpha`;
    }
};

function returnsAnAnonymousFunction() {
    return function() {
        return (1+2);
    };
};