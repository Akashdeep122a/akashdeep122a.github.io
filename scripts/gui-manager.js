// Theme manager for managing theme
function set_Relaxing_Theme(){
    document.body.style.backgroundImage = 'url("https://pageno3.wordpress.com/wp-content/uploads/2024/05/download2818291131391897398642731.jpg")';
}

function set_Default_Theme(){
    document.body.style.backgroundImage = 'linear-gradient(to bottom right, #ff7eb3, #ef5f77)';
    document.body.style.backgroundImage = 'url("https://pageno3.wordpress.com/wp-content/uploads/2024/05/download2818291131391897398642731.jpg")';
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