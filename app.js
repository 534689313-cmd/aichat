class App{

constructor(){

this.api=new API()

this.ui=new UI()

this.storage=new StorageManager()

this.bind()

}

bind(){

document.getElementById("send").onclick=()=>this.send()

document.getElementById("clear").onclick=()=>this.ui.clear()

document.getElementById("model-select")
.onchange=(e)=>this.api.setModel(e.target.value)

}

async send(){

let input=document.getElementById("input")

let msg=input.value

input.value=""

this.ui.addMessage("user",msg)

let thinking=document.getElementById("thinking").checked

let res=await this.api.send(msg,thinking)

this.ui.addMessage("assistant",res)

}

}

new App()
