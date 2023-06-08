let content=[
    { 
        Name:"Golf 8R",
        Discription:"R912 800",
        img:"https://i.postimg.cc/cCrjn15s/Volkswagen-Golf-8-R-e1604469763504.jpg",
       
    },
    { 
        Name:"Nissan GT-R R35",
        Description:"R2. 9-million",
        img:"https://i.postimg.cc/cHD2Cth9/GT-R-edit-2-800x480.webp",
       
    },
    { 
        Name:"Lamborghini Revuelto",
        Description:"R9. 8-million",
        img:"https://i.postimg.cc/Zqx1kMdh/2024-lamborghini-revuelto-127-641a1d518802b.jpg",
       
    }
]


let displayElement = document.querySelector('#content');
content.forEach(content => {
   console.log(displayElement); displayElement.innerHTML+=`
   
   <div class="col">
     <div class="card">
       <img src=" ${content.img}" class="card-img-top" alt="..."  style="height: 22rem;">
       <div class="card-body">
         <h5 class="card-title">${content.Name}</h5>
         <p class="card-text">${content.Description}</p>
        <a href="../HTML/blog.html"> <button class="btns">read more</button></a>
       </div>
     </div>
   </div>

   
  
`})






