const heartBtn = document.querySelector("#heart")
const likeBtn = document.querySelector("#like")
const pauseBtn = document.querySelector("#pause")
const minusBtn = document.querySelector("#minus")


const plusBtn = document.querySelector("#plus")
let numoflike = 0


plusBtn.addEventListener("click", (e) => {
    numoflike++;
  let counter = document.querySelector("#counter")
    
  counter.textContent = numoflike
    console.log(numoflike)
}) 

minusBtn.addEventListener("click", (e) => {
    numoflike--;
let counter = document.querySelector("#counter")
counter.textContent = numoflike
console.log(numoflike)
}) 

 
    
    
    // counter.id = 1
    // let counter = document.querySelector("#counter").value
    // // .e.target.counter ++
 







