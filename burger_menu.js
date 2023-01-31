const burger = document.getElementById('burger');
const nav_Ul = document.getElementById('top-nav-ul');

burger.addEventListener('click' , () =>{
    nav_Ul.classList.togggle('show');
});