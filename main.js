// for adding active classes to nav links and make them working
// let nav_links=document.querySelectorAll("nav ul li a");

// function linkaction(){
//         nav_links.forEach(n=>n.classList.remove("active"));
//         this.classList.add("active");  
// }
// nav_links.forEach(n=>n.addEventListener("click",linkaction));






// adding active classses to the thumbnails of magicbox

let thumbnails= document.querySelectorAll(".magicbox ul li");
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


//changing image on click
function imageslider(image){
    document.querySelector(".main-fruit-img").src=image;
    
}
// changing background on click
function changebg(color){
    document.querySelector(".bg").style.background=color;
}

//adding menu toogle for mobile view
let menutoogle=document.querySelector(".toogle");
let navigation=document.querySelector("nav ul");

menutoogle.addEventListener("click", ()=>{
    menutoogle.classList.toggle("active");
    navigation.classList.toggle("active");
});