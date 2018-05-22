const fetch = require('node-fetch');

const sleep = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000))

async function printSlowly() {
  console.log('Going to sleep')
  await sleep(1)
  console.log('that was good sleep')
  return 'returning string'
}

// const promise = printSlowly()
// console.log('Promise:', promise)
// promise.then(console.log)


async function fetchJson() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const json = await response.json()
  console.log(json)
}

// fetchJson()