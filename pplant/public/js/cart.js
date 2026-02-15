let cart=JSON.parse(localStorage.getItem("cart"))||[];

function addToCart(name){
cart.push(name);
localStorage.setItem("cart",JSON.stringify(cart));
alert(currentLang==="en"?"Added to cart":"कार्ट में जोड़ा गया");
}
