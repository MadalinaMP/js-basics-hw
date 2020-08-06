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