// You should implement your task here.

module.exports = function towelSort(matrix) {
    return !!matrix
        ? matrix
              .reduce((prev, cur, i) => {
                  return i % 2 !== 0
                      ? prev.concat(cur.reverse())
                      : prev.concat(cur);
              }, [])
              .flat()
        : [];
};
