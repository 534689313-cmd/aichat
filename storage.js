class StorageManager{

saveChats(chats){

localStorage.setItem("chats",JSON.stringify(chats))

}

loadChats(){

let data=localStorage.getItem("chats")

return data?JSON.parse(data):[]

}

}