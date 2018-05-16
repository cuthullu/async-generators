// function createStore() {

//   const tables = {
//     customer: {
//       1: { name: 'John' },
//       2: { name: 'Mattias' },
//       3: { name: 'Kim' },
//     },
//     food: {
//       1: [ 'cake', 'waffle' ],
//       2: [ 'coffee' ],
//       3: [ 'apple', 'carrot' ],
//     }
//   }

//   return {
//     get: (table, id) => delay(50).then(() => tables[table][id])
//   }
// }
// const store = createStore();

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// const customers = {
//   [Symbol.iterator]: function() {
//     let i = 0
//     return {
//       next: async function() {
//         i++
//         const customer = await store.get('customer', i)

//         if (!customer) {
//           return { done: true }
//         }

//         customer.foods = await store.get('food', i)
//         return {
//           value: customer,
//           done: false
//         }
//       }
//     }
//   }
// }

// ;(async function() {
//   const iterator = customers[Symbol.iterator]()
//   const customer1 = (await iterator.next()).value //?
//   const customer2 = (await iterator.next()).value //?
//   const customer3 = (await iterator.next()).value //?

//   for await (const customer of customers) {
//    console.log( customer) //?
//   }
// })()