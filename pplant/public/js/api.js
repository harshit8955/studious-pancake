function loadPlants(){
const grid=document.getElementById("plantGrid");
if(!grid)return;

fetch("/api/plants")
.then(res=>res.json())
.then(data=>{
grid.innerHTML=data.map(p=>`
<div class="card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<a href="plant.html?name=${p.name}">View</a>
<button onclick="addToCart('${p.name}')"
data-en="Add to Cart"
data-hi="कार्ट में जोड़ें">Add to Cart</button>
</div>`).join("");
});
}

document.addEventListener("DOMContentLoaded",loadPlants);
