// let first = 0;
// let second = 0;

let Promise1 = new Promise((resolve)=>{
    
        setTimeout(()=>{
                resolve(100);
            },2000)
})

let Promise2 = new Promise((resolve)=>{
  
    setTimeout(()=>{
            resolve(300);
        },2000)
})

// // let PromiseResult = new Promise((resolve)=>{
// //     setTimeout(()=>{
// //             resolve(600);
// //         },2000)
// // }).then(v=>console.log(v))

const myfun = async()=>{
  let y = await Promise1
  let x = await Promise2
  console.log(x + y)
}


myfun()

