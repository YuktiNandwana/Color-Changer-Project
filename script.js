const button=document.getElementById("chngclrbtn");
button.addEventListener("click", function () {
const randomColor="#"+Math.floor(Math.random()*1677721).toString(16);
document.body.style.backgroundColor=randomColor;
});


// 🧠 What’s Happening Here????????????

// const button = document.getElementById("chngclrbtn");	
// 🔍 You’re grabbing the button from HTML using its ID (id="chngclrbtn") and storing it in a button variable.
// button.addEventListener("click", function () { });	
// 🖱️ You're telling JS: "Hey! Whenever someone clicks this button, run this function." 
// But right now, that function is empty, so nothing happens when you click! 😅

// Cheat Sheet:
// #FFFFFF = white
// #000000 = black
// #FF0000 = red
// #00FF00 = green
// #0000FF = blue
