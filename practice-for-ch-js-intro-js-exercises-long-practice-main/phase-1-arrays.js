// // Your code here
// Array.prototype.uniq = function() {
//     let arr = [];

//     for(let i = 0; i < this.length; i++){
//         if (!arr.includes(this[i])){
//             arr.push(this[i]);
//         }
//     }

//     return arr;
// };

// console.log([1, 2, 2, 3, 3, 3].uniq());

// Array.prototype.twoSum = function(){
//     let arr = [];

//     for(let i = 0; i < this.length; i++){
//         for(let j = i + 1; j < this.length; j++){
//             if (this[i] + this[j] === 0) {
//                 arr.push([i , j]);
//             } 
//         }
//     }

//     return arr;
// }

// console.log([-1, 0, 2, -2, 1].twoSum());

// Array.prototype.transpose = function() {
//     let arr = [];

//     let j = 0;
//     while (j < this.length){
//         let i = 0;
//         arr[i] = []

//         while (i < this.length){
//             arr[i].push(this[j][i]);
//             i++;
//         }
//         j++;
//     }

//     return arr;
// }


Array.prototype.transpose = function () {
    let arr = [];
    // Initialize arr[i] outside the loop
    for (let i = 0; i < this.length; i++) {
        arr[i] = [];
    }

    let j = 0;
    while (j < this.length) {
        let i = 0;

        while (i < this.length) {
            arr[i].push(this[j][i]);
            i++;
        }
        j++;
    }

    return arr;
}

[[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose();