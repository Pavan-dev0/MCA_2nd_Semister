// ACCEPTING THE USER INPUT

//1. Easy Way = Window Prompt
//2. Professional Way= HTML  Textbox

//Easy Way
let username;

username=window.prompt("whats your username");
console.log(username);

//Professional Way
let EndUserName;
document.getElementById("mySubmit").onclick=function(){
    EndUserName = document.getElementById("myText").value;
    console.log(EndUserName);
    document.getElementById("myH1").textContent=`Hello ${EndUserName}`;
}


