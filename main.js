// adding active classses to the thumbnails of magicbox

let thumbnails= document.querySelectorAll(".magicbox ul li");
let content =document.querySelector(".content-name");
for(let i=0;i<thumbnails.length;i++){    
   
    thumbnails[i].addEventListener("click", ()=>{
        //for adding check class to each elemnt 
        for(let j=0;j<thumbnails.length;j++){
            thumbnails[j].className="check";
        }
        // for adding active check class for clicked element
        thumbnails[i].className="check active";
    });
   
} 