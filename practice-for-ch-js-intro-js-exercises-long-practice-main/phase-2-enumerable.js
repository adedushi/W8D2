// Your code here

Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}


function callback(el) {
    console.log(el + 1);
}

[1,2,3].myEach(callback)

Array.prototype.myMap = function(callback2) {
    res = [];
    res += this.myEach(callback2)
    return res;
}

function callback2(el) {
    return el + 1
}

[1,2,3].myMap(callback2)