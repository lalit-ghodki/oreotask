var crl = document.querySelector("#crl");

window.addEventListener("mousemove",function(details){
    crl.style.left = details.pageX +"px";
    crl.style.top = details.pageY +"px";
    
})

