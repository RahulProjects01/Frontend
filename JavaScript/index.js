let arr = [1, 2, 4, 55, 23, 45];
let map = arr.map((element, index, array) => {
    //  return element > 9;
    return `index of ${index} and the value is ${element} belong to ${arr}`;
})
console.log(arr);
console.log(map);