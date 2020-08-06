//1
console.log('1. display in the console the numbers from 1 to 20');

for (var index = 1; index <= 20; index++) {
    console.log(index);
}


//2
console.log('2. display in the console the odd numbers from 1 to 20');

for (var index = 1; index <= 20; index++) {
    if ((index % 2) !== 0) {
        console.log(index);
    }
}


//3
console.log('3. compute the sum of the elements of an array and display it in the console');

var list = [3, 1, 2, 3, 15, 24, 55, 3, 3, 3];
var totalSum = 0;
for (var index = 0; index < list.length; index++) {
    currentElement = list[index];
    totalSum = totalSum + currentElement;
}
console.log('The sum of the array: ' + list + ' is: ' + totalSum);


//4
console.log('4. compute the maximum of the elements of an array and display it in the console ');

var list = [3, 1, 2, 3, 15, 24, 55, 3, 3, 3];
currentMax = list[0];
for (var index = 0; index <= list.length; index++) {
    currentElement = list[index];
    if (currentElement > currentMax) {
        currentMax = currentElement;
    }
}
console.log('The max of the array: ' + list + ' is: ' + currentMax);

//5
console.log('5. compute how many times a certain element appears in an array');

var list = [3, 1, 2, 3, 15, 24, 55, 3, 3, 3];