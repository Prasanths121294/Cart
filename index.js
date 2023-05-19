

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
   databaseURL: "https://cart-7c2f5-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const cartInDB = ref(database, "myCart")

 
 
 const inputFieldEl=document.getElementById("input-field")
 const addButtonEl=document.getElementById("add-button")
   const orderListEl=document.getElementById("order-list")
   listItems=""
 addButtonEl.addEventListener("click",function(){
    let inputValue=inputFieldEl.value
    push(cartInDB,inputValue)
        listItems += `<li>${inputValue}</li>`
 })
 orderListEl.innerHTML = listItems