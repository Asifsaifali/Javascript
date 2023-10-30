var createCounter = function(n) {
    var count = n-1;
    return function() {
        count++;
        return count;
    };
};

 const counter = createCounter(10)
console.log(counter()); 
console.log(counter());
console.log(counter());
 