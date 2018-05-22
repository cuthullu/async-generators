function makeIterator() {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  let i = 0
  return {
    next: function () {
      if (i < arr.length -1) {
        return { value: arr[i++], done: false }
      }
      return { done: true }
    }
  }
}


// const myIterator = makeIterator()
// console.log(myIterator.next())


const iterable = {
  [Symbol.iterator]: makeIterator
}

// for (const n of iterable) {
//   console.log(n)
// }

// console.log(...iterable)
