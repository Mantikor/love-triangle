/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let triangles_count = Math.floor(preferences.filter((item, i) =>
        preferences[preferences[preferences[i]-1]-1] === i+1).length/3);
    return triangles_count;
};
