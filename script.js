// Task 1
// На входе два одномерных массива. В каждом массиве всегда по два элемента. Верните третий массив результат которого будет сумма элементов предыдущих


// let arr = [2,4]
// let arr2 = [1,3]
// let newArr = []
// for(i = 0 ; i < arr.length ; i++ )
//  newArr = [...newArr,arr[i] + arr2[i]]
// console.log(newArr)



// Task 2
// Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два


// let arr = [1,2,3,4]
// let  newArr = arr =  arr.map((el) => {
//     return el * 2
// })
// console.log(newArr)


// Task 3 -----
// Напишите функцию, которая принимает массив объектов с полем id. Например [[{id: '100'}, {id: 2}]] и возвращает массив этих id


// const  getId = (arr) => {
//     let newArr = []
//     for(let i = 0 ; i < arr.length ; i++){
//         newArr = [...newArr,arr[i].id]
//     }
//     return newArr
// }
// console.log(getId([{id: 1},{id: 2},{id: 3},{id: 4}]))

// Task 4
// Напишите функцию, которая принимает массив чисел и возвращает массив строк по шаблону <h1>{number}</h1>

// const getTag = (arr) =>{
//     let newArr = []
//     for( let i = 0 ; i < arr.length ; i++){
//     let str = `<h1> ${(arr[i])} </h1>`
//     newArr = [...newArr, str]
// }
// return newArr
// }

// console.log(getTag([1,2]))



// Task 5
// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв

// const isEven = (arr) =>{
//     let newArr = []
//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i].length % 2 === 0){
//             newArr =  [...newArr,arr[i]]
//         }
        
        
//     }
//     return newArr
// }
// console.log(isEven(['ab','abc','abcd']))



// Task 6
// Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных на два, которые делятся на 10 без остатка


// const getTag = (arr) => {
//     let newArr = []
//     for(i = 0 ; i < arr.length ; i++){
//         let Tag = arr[i] * 2  
//         if(Tag % 10 === 0){
//         newArr = [...newArr,Tag]
//         }
//     }
//     return newArr
// }
// console.log(getTag([1,2,3,7,10,5]))



// Task 7
// Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true

// const getTrue = (arr) =>{
//     let newArr = []
//     for(i = 0 ; i < arr.length ; i++){
//         if(arr[i] !== false){
//         newArr = [...newArr,arr[i]]
//     }
    
//     }
//     return newArr
// }
// console.log(getTrue([true,false,true,true]))



// Task 8
// Напишите функцию, которая принимает массив значений в т.ч и значения undefined и возвращает массив только без значений undefined


// const getArr = (arr) =>{
//     let newArr = []
//     for(i = 0 ; i < arr.length ; i++){
//         if(arr[i] !== undefined ){
//             newArr = [...newArr,arr[i]]
//         }
//     }
//     return newArr
// }
// console.log(getArr([true, false, true,true, undefined, true, undefined]))


// Task 9
// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce

// let newArr = (arr) => {
//     return arr.reduce((acc,rec)=>{
//         return acc + rec
//     },true
//     )
// }
// console.log(newArr( [1,2,3,4,5]))


// Task 10
// Напишите функцию, которая принимает массив булевых значений и возвращает результат логического И над ними. Использовать reduce
// Логическое И - это операция &&


// let newArr = (arr) =>{
//     return arr.reduce((acc,rec)=>{
//                 return acc && rec
//              },true
//              )
//          }
// console.log(newArr([true,false,true]))


// Task 11
// Напишите функцию, которая принимает массив чего угодно и возвращает объект с полями {field1, field2, field3, field4}. Использовать reduce. 
// Готовим баночки и не отчаиваемся. Будет 🔥
// Input: [true,1,'wow','you are smart, bro']

// const getObj = (arr) => {
//     return arr.reduce((acc, rec,idx) => {
//           acc[`field${idx + 1}`] = rec
//          return acc
//     },{})
// }
// console.log(getObj([true,1,'wow','you are smart, bro']))



// Task 12 ------
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;

// const newObj = (obj) => {
//     let result = Object.keys(obj)
//     for ( i = 0 ; i < result.length ; i++  ){
//         if ( typeof obj[result[i]] !== 'string'){
//             delete obj[result[i]]
//     }
//     }
//     return obj


// }
// console.log(newObj({ name: 'Baha', isAdmin: true }))


// 13 Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false


// const getObj = (obj) => {
//     let arr = Object.keys(obj)
//     for (i = 0 ; i < arr.length ; i++){
//     if(obj[arr[i]] !== false){
//         delete obj[arr[i]]
//     }
//     }
//     return obj
// }
// console.log(getObj({ isAdmin: false, isBaha: true }))


// Task 14
// Вам задан массив - верните среднее число массива. (сумма всех элементов деленное на количество элементов)

//  const newArr = (arr) => {
//     return arr.reduce((acc,rec) =>{
//         return (acc + rec / arr.length)
//     },0)
// }

// console.log(newArr([4, 6]))


