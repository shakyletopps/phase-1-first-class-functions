function spy(){
    console.log('I am a spy!');
};

function receivesAFunction(spy) {
 return spy();
}

function aNamedFunction() {
 console.log('I am a function.');
};

function returnsANamedFunction() {
return aNamedFunction;
};


function returnsAnAnonymousFunction() {
 return function () {

 }
}

