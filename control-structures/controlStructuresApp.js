console.log('1. display in the console the numbers from 1 to 20');

for (var index = 1; index <= 20; index++) {
    console.log(index);
}

console.log('2. display in the console the odd numbers from 1 to 20');

for (var index = 1; index <= 20; index++) {
    if ((index % 2) !== 0) {
        console.log(index);
    }
}

console.log('3. compute the sum of the elements of an array and display it in the console')

var list = [3, 1, 2, 3, 15, 24, 55, 3, 3, 3];
var totalSum = 0;
for (var index = 0; index < list.length; index++) {
    currentElement = list[index];
    totalSum = totalSum + currentElement;
}
console.log('The sum of the array: ' + list + ' is: ' + totalSum);