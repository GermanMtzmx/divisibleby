/**
*
*
*
*/
const arrayGenerator = n => [...Array(n).keys()].map(i => i+1);


/**
*
*
*
*/
function getDivisorIndex(number = 0, divisor = 0, index = 0) {
  switch (number % divisor) {
    case 0:
      return index;
    default:
      return undefined;
  }
}

/**
*
*
*
*/
function getDivisibleIndex(collection = [], divisor = 0) {
  // return collection.map((n,i) => n % divisor === 0 ? i : undefined ).filter(el => el !== undefined);
  return collection.map((n,i) => getDivisorIndex(n, divisor, i)).filter(el => el !== undefined);
}

/**
*
*
*
*/
function getBothIndex(mayor = [], minor = []) {
  return minor.filter(idx => mayor.includes(idx));
}

/**
*
*
*
*/
function replaceElements(collection = [], indexes = [], replacement = '') {
  for(let idx of indexes) {
    if (!isNaN(collection[idx])) {
      collection[idx] = replacement;
    }
  }
}


function divisibleByBoth(collection = [], replacements = []) {

  const knowDivisors = replacements.map(element => {
    return {
      ...element,
      indexes: getDivisibleIndex(collection, element.divisor),
    }
  });

  const orderKnowDivisors = knowDivisors.map(divisors => divisors.indexes).sort((a,b) => b.length - a.lenght);

  const divisibleByTwo = {
    replacement: knowDivisors.map(know => know.replacement).join(''),
    indexes: getBothIndex(...orderKnowDivisors)
  }

  const finalDivisors = [
    divisibleByTwo,
    ...knowDivisors
  ];

  let finalCollection = [...collection];

  for (let divisorObj of finalDivisors) {
    replaceElements(finalCollection, divisorObj.indexes, divisorObj.replacement)
  }

  return finalCollection;


}




const replacements = [
  {
   divisor: 3,
   replacement: 'Foo'
  },
  {
    divisor: 5,
    replacement: 'Bar'
  }
];

const test = divisibleByBoth(arrayGenerator(100), replacements);
