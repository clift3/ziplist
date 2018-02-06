function zipList(list1, list2) {
  const newlist = [];
  for (let i = 0; i < list1.length; i++) {
    newlist.push(list1[i]);
    newlist.push(list2[i]);
  }
  return newlist;
}

function zipListTheSimpleWay(list1, list2) {
  const newlist = _.zip(list1, list2);
  return _.flatten(newlist);
}

const array1 = [1, 2, 3, 4];
const array2 = [11, 22, 33, 44];

console.log(zipList(array1, array2));
console.log(zipListTheSimpleWay(array1, array2));
