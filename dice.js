var randomno1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg = "dice" + randomno1 + ".png";
var rsrc = "images/"+ randomdiceimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",rsrc);//attribute change to"" mei unless normally jab variable daalna ho
var randomno2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg1 = "dice" + randomno2 + ".png";
var rsrc2 = "images/"+ randomdiceimg1;
var img2=document.querySelectorAll("img")[1];
var player1=prompt("player1 name?");
var player2=prompt("player2 name?");
img2.setAttribute("src",rsrc2);
if(randomno1>randomno2){
    var h1=document.querySelector("h1");
    h1.innerHTML=player1+" won 🚩"
}
else if(randomno2>randomno1){
    var h1=document.querySelector("h1");
    h1.innerHTML=player2+" won 🚩"
}
else if(randomno1==randomno2){
    var h1=document.querySelector("h1");
    h1.innerHTML="Draw!";
} 