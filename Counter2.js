var createCounter = function(init) {
    var a=init;
      return{
           increment:function(){
               a++;
               return a;
          },
           decrement:function(){
              a--;
              return a;
          },
            reset:function(){
              a=init
              return a;
          }
         
      }
};


const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.reset()); 
console.log(counter.decrement());
