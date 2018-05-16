function iterator() {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  let i = 0
  return {
    next: function () {
      if (i < arr.length) {
        return { value: arr[i++], done: false }
      }
      { done: true }
    }
  }
}

const iterable = {
  [Symbol.iterator]: iterator
}

for (const n of iterable) {
  console.log(n)
}


// const myIterator = iterator()
// console.log(myIterator.next())