const menubtn=document.getElementById("menu-btn");
const navlinks=document.getElementById("nav-links");
const menuBtnIcons=menuBtn.querySelector("i");
menuBtn.addEventListener("click",(e)=>{
    navlinks.classList.toggle("open");
    const isopen=navlinks.classList.contains("open");
    menuBtnIcons.setAttribute("class",
        isOpen ?"ri-close-line ": "ri-menu-3-line"
    );
});