/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  
  result.insert = function(key, val) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[index]) storage[index] = [];
    storage[index].push([key, val]);
    size++;
    if (size >= storageLimit  * (3/4))
      resize("up");
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[index]) return false;
    for(var i = 0; i<storage[index].length; i++) {
      if (storage[index][i][0]===key) return storage[index][i][1] 
    }
    return false;
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[index]) return false;
    for(var i = 0; i<storage[index].length; i++) {
      if (storage[index][i][0]===key){
        storage[index].splice(i, 1);
        size--;
        if(storageLimit > 4 && size <= storageLimit/4) resize("down");
        return true;
      } 
    }
    return false;
  };

 var resize = (direction) => {
   var change = direction === "up"? 2 : 0.5;
    var oldStorage = storage;
    storage = [];
    storageLimit *= change;
    oldStorage.forEach(index=>{
      index.forEach(tuple=>{
        result.insert(tuple[0], tuple[1])
      })
    })
  }

  return result;
};
