//menu lateral
var menu_visible= false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false)
    menu.style.display = "block";
    menu_visible = false;
    
}