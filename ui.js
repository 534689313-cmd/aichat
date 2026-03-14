class UI{

addMessage(role,text){

let div=document.createElement("div")

div.className="message "+role

div.innerHTML=marked.parse(text)

let copy=document.createElement("button")

copy.innerText="复制"

copy.onclick=()=>{

navigator.clipboard.writeText(text)

}

div.appendChild(copy)

document.getElementById("messages").appendChild(div)

}

clear(){

document.getElementById("messages").innerHTML=""

}

}