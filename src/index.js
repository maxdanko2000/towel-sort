
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
}
let result = [];
matrix.map((item, index) => {
    if((index + 1) % 2 === 0 ) {
        item.reverse();
    }
    result = [...result,...item];
});
return result;
}
