//forEach

function doubleValues(arr){
  let doubleArr = [];
  arr.forEach(function(val){
    doubleArr.push(val * 2);
  });
  return doubleArr;
}

function onlyEvenValues(arr){
  let evenArr = [];
  arr.forEach(function(value){
    if (value % 2 === 0) {
      evenArr.push(value);
    }
  });
  return evenArr;
}

function showFirstAndLast(arr){
  let firstLastArr = [];
  arr.forEach(function(value) {
    firstLastArr.push(value[0] + value[value.length - 1]);
  });
  return firstLastArr;

}

function addKeyAndValue(arr, key, value){
  arr.forEach(function(val){
    val[key] = value;
  });
  return arr;
};


function vowelCount(str){
  let vowels = `aeiou`;
  let finalObj = {};
  let splitArr = str.split("");

  splitArr.forEach(function(letter){
    let lowerCasedLetter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1){
      if (finalObj[lowerCasedLetter]) {
        finalObj[lowerCasedLetter]++;
      } else {
        finalObj[lowerCasedLetter] = 1;
      }
    }
  });
  return finalObj;
}

//Map

function doubleValuesWithMap(arr){
  let doublesArray = [];
  arr.map(function(value){
    doublesArray.push(value * 2);
  });
  return doublesArray;
}

function valTimesIndex(arr){
  let newArr = arr.map(function(value, index){
    return value * index;
  });
  return newArr;
}

function extractKey(arr, key){
  return arr.map(function(obj){
    return obj[key];
  });
}

function extractFullName(arr){
  let fullName = arr.map(function(val){
    return val.first + " " + val.last;
  });
  return fullName;
}

//Filter

function filterByValue(arr, key){
  return arr.filter(function(obj){
    return obj.hasOwnProperty(key)
  });
}

function find(arr, value){
  return arr.filter(function(element){
    return element === value;
  })[0];
}

function findInObj(array, key, value){
  return array.filter(function(object){
    return object[key] === value;
  })[0];
}

function removeVowels(str){
  let vowels = `aeiou`;
  let lowerCasedStr = str.toLowerCase();
  let newStr = lowerCasedStr.split('').filter(function(char){
    return !vowels.includes(char);
  }).join('');
  return newStr;
}

function doubleOddNumbers(arr){
  return arr.filter(function(val){
    return val % 2 !== 0;
  }).map(function(val){
    return val * 2;
  });
}

