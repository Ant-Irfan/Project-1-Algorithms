// hash function
function hashStringToInt(s, tableSize) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {
  // size table is changed according to task
  table = new Array(262144);
  numItems = 0;

  // function to insert all elements
 insertElements(loadFactor){
    const itemsToAdd = loadFactor * this.table.length;
    for (let i = 0; i < itemsToAdd; i++) {
        myTable.setItem(`${i}key`, `${i}value`);
    }
  }

  // function to insert one element
  setItem = (key, value) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.5) {
      // resize
      // this.resize();
    }

    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  // function to retreive item
  getItem = key => {
    const idx = hashStringToInt(key, this.table.length);

    if (!this.table[idx]) {
      return null;
    }

    // O(n)
    return this.table[idx].find(x => x[0] === key)[1];
  };
}

const myTable = new HashTable();
myTable.insertElements(0.95)
let arr = []
var sum = 0
// checking execution time
for (let index = 0; index < 1048576; index++) {
 var t0 = performance.now();
 myTable.getItem(index)
 var t1 = performance.now();
 var time = t1 - t0;
 sum = time + sum
 arr.push(time)
}

// sorting items to get slowest and fastest execution
arr.sort();
console.log(sum/1048576);
console.log(arr[0]);
console.log(arr[1048575]);