if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}

document.addEventListener("click",e=>{
if(e.target.id==="themeToggle"){
document.body.classList.toggle("dark");
localStorage.setItem("theme",
document.body.classList.contains("dark")?"dark":"light");
}
});
