let blogs = [""]
let addBtn = document.querySelector("#added")
let deleteBtn;
let editBtn;
let contDisplay = document.querySelector("#display-box")
let resultDisplay = document.querySelector("#show")

 

addBtn.addEventListener("click", (e) => {
     console.log(event.target)
     let newTitle = document.querySelector('.input-title')
     let newId = document.querySelector(".input-id") 

             resultDisplay.innerHTML += ` <p>
            ${newTitle.value}
        </p>`
        console.log(newTitle.value, newId.value)
        console.log(resultDisplay)
  });






    // addedBtn.addEventListener("click", (e)=> {

    // })