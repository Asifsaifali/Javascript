// 2724. Sort By


var sortBy = function(arr, fn) {
    return arr.sort((a, b)=>{
    return fn(a) > fn(b) ? 1 : -1
    })
};