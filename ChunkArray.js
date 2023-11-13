// 2677. Chunk Array

const arr = [8,5,3,2,6];
size = 6
const newarr = []
for(let i = 0; i<arr.length; i+=size){
  newarr.push(arr.slice(i,i+size))
}
console.log(newarr)