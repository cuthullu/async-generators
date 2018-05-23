
const sleep = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000))

async function* asyncGen(count) {
  let i = 0;
  while (true) {
    if (i < count) {
      await sleep(1)
      yield i++
    } else return
  }
 }
 
 async function runAsyncGen() {
  for await (const t of asyncGen(10)) {
    console.log(t)
  }
 }
 runAsyncGen()
 