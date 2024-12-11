const big=document.querySelector('.big')
const boxes=document.querySelectorAll('.box')
const h1=document.getElementsByTagName('h1')
const btn=document.getElementById('reset')
let cv='x'
let count=0

let winningcondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function startgame(e){
    if(e.target.className!=='big'){   
        if(e.target.innerText===''){
            e.target.textContent=cv
            count++;
            if(cv=='x'){
                cv='o'
            }else{
                cv='x'
            
            }
        }
        winner()
        if(count==9){
          h1[0].innerText='Match Draw'
        big.classList.add('draw')
       
        }
    }
   

}

big.addEventListener('click',startgame);

// big.addEventListener('click',(e)=>{
//     if(e.target.className!=='big'){
//         if(e.target.innerText===''){
//             e.target.textContent=cv
//             if(cv=='x'){
//                 cv='o'
//             }else{
//                 cv='x'
            
//             }
//         }
//     }

//     winner()
 



   
// })



function winner(){
    winningcondition.forEach((item)=>{
        let index0=item[0]
        let index1=item[1]
        let index2=item[2]
        let val0=boxes[index0].innerText
        let val1=boxes[index1].innerText
        let val2=boxes[index2].innerText
        // console.log(index0,val0,index1,val1,index2,val2);
        if(val0!=="" && val1!=="" && val2!==""){
           
            if(val0 === val1 && val0  === val2){
                boxes[index0].classList.add('winner')
                boxes[index1].classList.add('winner')
                boxes[index2].classList.add('winner')
                h1[0].innerText=`winner is ${val0}`
                count=0
                // console.log("winner is",val0);
                big.removeEventListener('click',startgame)
                
            }
        }
    })
}


btn.addEventListener('click',()=>{
    // console.log('hello');
    cv='x'
    h1[0].innerText='Tic-Tac-Toe'
    boxes.forEach((item)=>{
        item.classList.remove('winner')
        big.classList.remove('draw')
        item.innerText=''
        
    })
    big.addEventListener('click',startgame);
})

// ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss


// const big=document.querySelector('.big')
// const box=document.querySelectorAll('.box')
// let cv='x'
// let winningcondition=[
//      [0,1,2],
//      [3,4,5],
//      [6,7,8],
//      [0,3,6],
//      [1,4,7],
//      [2,5,8],
//      [0,4,8],
//      [2,4,6],
// ]

// big.addEventListener('click',(e)=>{
//   if(e.target.className !=='big'){
//     // console.log('hello');
//     if(e.target.innerText===''){
//       e.target.textContent=cv
//     if(cv=='x'){
//         cv='o'
//     }else{
//      cv='x'
//     }

//   }
// }
// winninggame()
//   })


//   function winninggame(e){
//        winningcondition.forEach((item)=>{
//              console.log(winninggame);
             

//        })
        
        
       
//   }


