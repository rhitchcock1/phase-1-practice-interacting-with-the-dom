const heartBtn = document.querySelector("#heart")
const likeBtn = document.querySelector("#like")
const pauseBtn = document.querySelector("#pause")
const minusBtn = document.querySelector("#minus")
const commentForm = document.querySelector("#comment-form")

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


commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
const commentInput = document.querySelector("#list")
 const p = document.createElement("p")
 commentInput.append(p)
 p.textContent = e.target["comment-input"].value
    commentInput.append(p)

})
    







