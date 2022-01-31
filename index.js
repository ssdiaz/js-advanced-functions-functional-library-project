// Collection Functions (Arrays or Objects)

const standardizeInput = function (collection) { // copied
    return collection instanceof Array ? collection.slice() : Object.values(collection); 
    //if statement ...   condition     ?    expression 1    : expression2
};

const myEach = (collection, callback) => {
    const newCollection = standardizeInput(collection);

    newCollection.forEach(function(e) {
        callback(e)
    })
    return collection
};
    //their solution:
    // const myEach = function (collection, callback) {
    //     const newCollection = standardizeInput(collection);
      
    //     for (let idx = 0; idx < newCollection.length; idx++) {
    //       callback(newCollection[idx]);
    //     }
      
    //     return collection;
    //   };


const myMap = (collection, callback) => {
    const newCollection = standardizeInput(collection);
    return newCollection.map( e => callback(e))
}

const myReduce = (collection, callback, acc) => {
    let newCollection = standardizeInput(collection);

    // copied
        // The if statement below handles the case where no start value is passed in
        // for the accumulator
        // If acc is null, it is set equal to the first value in newCollection
        // That first value is then sliced out of newCollection since it has already
        // been accounted for
    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    } 
    // me :) 
    return newCollection.reduce(function(memo, e){
        return callback(memo, e, newCollection)
    }, acc)
}

const myFind = (collection, predicate) => {
    const newCollection = standardizeInput(collection);

    return newCollection.find(function(e){
        return predicate(e)
    })
}

const myFilter = (collection, predicate) => {
    const newCollection = standardizeInput(collection);
    let newArray = []

    for (let i = 0; i < newCollection.length; i++){
        if (predicate(newCollection[i])){
            newArray.push(newCollection[i])
        }
    }
    return newArray
}

const mySize = collection => {
    const newCollection = standardizeInput(collection);
    return newCollection.length
}


//Array Functions
const myFirst = function (arr, n = false) {
    return n ? arr.slice(0, n) : arr[0];
  };
  
let myLast = function (arr, n = false) {
    return n ? arr.slice(arr.length - n, arr.length) : arr[arr.length - 1];
};


//Object Functions
const myKeys = object => { return Object.keys(object) }
  
const myValues = object => { return Object.values(object) }