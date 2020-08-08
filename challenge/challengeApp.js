var matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

for (var i = 0; i <= 3; i++) //go through the lines
    for (var j = 0; j <= 3; j++) { //go through the columns
        if (i % 2 == 0) { //if i is an even number
            if (j % 2 == 0) matrix[i][j] = 0; //if j is an even number the value is 0
            else matrix[i][j] = 1; //else, if j is an odd number the value is 1
        }
        else {
            if (j % 2 == 0) matrix[i][j] = 1; //if j is an even number then value is 1
            else matrix[i][j] = 0; //else, if j is an odd number then value is 0
        }
    }
console.log(matrix);