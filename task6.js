export function groupBy(array, key) {
  return array.reduce((groups, item) => {
    const value = item[key];

    if (!groups[value]) {
      groups[value] = [];
    }

    groups[value].push(item);
    return groups;
  }, {});
}

export function sumBy(array, key) {
  return array.reduce((total, item) => total + item[key], 0);
}

// dont realy understnd the number 6 

