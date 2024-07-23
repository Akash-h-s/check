let btn=document.querySelector(".button");
let pass=document.querySelector(".pass");
let repass=document.querySelector(".repass");
let inco=document.querySelector(".inco");

btn.addEventListener("click",function(){
    if(pass.value===repass.value){
        url='index.html';
        window.location.href=url;
        console.log(pass.value);
        
    }
    else
    {
        inco.innerText="incorrect password";
        pass.value="";
        repass.value="";
    } 
});