class API{

constructor(){

this.apiKey="你的API_KEY"

this.model="qwen-plus"

}

setModel(m){

this.model=m

}

async send(message,thinking){

const res=await fetch(

"https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",

{

method:"POST",

headers:{

"Content-Type":"application/json",

"Authorization":"Bearer "+this.apiKey

},

body:JSON.stringify({

model:this.model,

enable_thinking:thinking,

messages:[

{

role:"user",

content:message

}

]

})

}

)

const data=await res.json()

return data.choices[0].message.content

}

}