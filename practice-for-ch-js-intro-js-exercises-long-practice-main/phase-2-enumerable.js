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
    (el + 1);
}



Array.prototype.myReduce = function(callback, initialValue){
    let i = 0;

    if (initialValue == false){
        i = 1;
    }

    sum = this[i]
    let arr = this.slice(i, this.length);
    this.myEach(function(el){
        sum += callback(el)
    });

    return sum
}


[1, 2, 3].myReduce(callback)


// arr.myEach(ele => console.log(ele))