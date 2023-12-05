Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}


// function callback(el) {
//     console.log(el + 1);
// }

// [1,2,3].myEach(callback)

// Array.prototype.myMap = function(callback2) {
//     res = [];
//     res += this.myEach(callback2)
//     return res;
// }

// function callback2(el) {
//     return el + 1
// }

// [1,2,3].myMap(callback2)

Array.prototype.myMap = function(callback) {
    let arr = [];

    this.myEach(function(el){
        arr.push(callback(el));
    });

    return arr;
}


function callback(el) {
    console.log(el + 1);
}

[1,2,3].myMap(callback)


// Array.prototype.myReduce(callback[, initialValue]) = {
    
// }