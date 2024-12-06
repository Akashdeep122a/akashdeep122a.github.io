// Theme manager for managing theme


function Toggle_theme(){
    document.body.classList.toggle("backgroundClass");
}



const menu = document.getElementById('menu');
const menu_x = document.getElementById('menu-x');
const drop_down_menu = document.getElementById('drop-down-menu');
var menu_can_open = 1;
menu_x.addEventListener('click', ()=>{
    if (menu_can_open){
        drop_down_menu.style.height = '120px';
        menu_can_open = 0;
    }
    else {
        drop_down_menu.style.height = '0px';
        menu_can_open = 1;
    }
})