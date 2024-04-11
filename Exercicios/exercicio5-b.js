var data = new Date();

let hora = data.getHours();
    
if(hora > 6 && hora < 12){
    document.body.style.background = "white";
    document.body.style.color = "black";
}else if(hora > 12 && hora < 18){
    document.body.style.background = "yellow";
    document.body.style.color = "black";
}else if(hora > 18 && hora < 24){
    document.body.style.background = "black";
    document.body.style.color = "white";
}else if(hora > 0 && hora < 6){
    document.body.style.background = "blue";
    document.body.style.color = "white";
}
     
