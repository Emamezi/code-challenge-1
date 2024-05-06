// q1
const array = [2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const cleantheRoom = function (arr) {
  let sortArr = arr.sort((a, b) => a - b); //sort array from lowest to highest
  console.log(sortArr);
  let grpArr = [sortArr[0]]; //set first element in the group array to first sortArr element
  let finalAns = [];
  console.log(sortArr.at(1));
  for (let i = 0; i < sortArr.length; i++) {
    // debugger;
    if (sortArr[i] === sortArr[i + 1]) {
      //check if first element matches the next element
      grpArr.push(sortArr[i + 1]); //add element to the grouped array
    } else {
      //check uniquness of the array
      //if only one element in the grp array, add directly to final array else add it to the grp array
      grpArr.length === 1 ? finalAns.push(grpArr[0]) : finalAns.push(grpArr);
      grpArr = [sortArr[i + 1]];
    }
  }
  return finalAns;
};

console.log(cleantheRoom(array));
