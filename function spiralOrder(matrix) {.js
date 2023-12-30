function spiralOrder(matrix) {
    let spiralNums = [];
        let top = 0;
        let right = 0;
        let bottom = matrix[0].length - 1;
        let left = matrix.length - 1;
        let direction = 'right';

        while (right <= left && top <= bottom) {
            if (direction === 'right') {
                for (i = top; i <= bottom; i++) {
                    spiralNums.push(matrix[right][top]);
                    top ++;
                }
                right++;
                direction = 'down'
            } else if (direction === 'down') {
                for (i = right; i >= left; i++) {
                    spiralNums.push(matrix[right][bottom]);
                    right++;
                }
                bottom--;
                right = matrix.length - 2;
                top = 0;
                direction = 'left'
            } else if (direction === 'left') {
                for (i = bottom; i <= top; i--) {
                spiralNums.push(matrix[left][bottom])
                bottom--;
                left -= 1;
                direction = 'up';
                }
            } else if (direction === 'up') {
                for (i = left; i <= 1; i--) {
                    spiralNums.push(matrix[left][bottom]);
                    left --;
                }
                top ++;
                bottom = matrix[0].length - 2;
                direction = 'right';
                left = matrix.length - 2;
            }

        }

    return spiralNums;
};

matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
