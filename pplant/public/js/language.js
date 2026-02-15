let currentLang=localStorage.getItem("language")||"en";

function updateLanguage(lang){
document.querySelectorAll("[data-en]").forEach(el=>{
el.textContent=el.getAttribute("data-"+lang);
});
localStorage.setItem("language",lang);
}

document.addEventListener("click",e=>{
if(e.target.id==="langBtn"){
currentLang=currentLang==="en"?"hi":"en";
updateLanguage(currentLang);
e.target.textContent=currentLang==="en"?"हिंदी":"English";
}
});

updateLanguage(currentLang);
