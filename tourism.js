let lg=document.querySelector(".lg");
let sup=document.querySelector(".sup");
lg.addEventListener("click",function(event){
    url="login.html";
    window.location.href=url;
    
});
sup.addEventListener("click",()=>{
    window.location.href="signup.html";
    
   
});
let places=document.querySelector(".places");
places.addEventListener("click",()=>{
    window.location.href="places.html";
});
let vehicles=document.querySelector(".vehicles");
vehicles.addEventListener("click",()=>{
    window.location.href="vehicles.html"
})
let res=document.querySelector(".resorts");
res.addEventListener("click",()=>{window.location.href="resorts.html"});
let foods=document.querySelector(".foods");
foods.addEventListener("click",()=>{window.location.href="food.html"});
let hotels=document.querySelector(".hotels")
hotels.addEventListener("click",()=>{window.location.href="hotels.html"});