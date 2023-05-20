

   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

   import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


   const appSettings = {
      databaseURL: "https://cart-7c2f5-default-rtdb.asia-southeast1.firebasedatabase.app/"
   }


   const app = initializeApp(appSettings)
   const database = getDatabase(app)
   const cartInDB = ref(database, "myCart")

   
   
   const inputFieldEl=document.getElementById("input-field")
   const addButtonEl=document.getElementById("add-button")
      const orderListEl=document.getElementById("order-list")
   
   onValue(cartInDB,function(snapshot){
            let listItem=Object.values(snapshot.val())
            clearShoppingListEl()
            for (let i=0; i<listItem.length; i++)
            {
            
               let currentBook=listItem[i]
               loadListValue(currentBook)
            }
         })
      
   addButtonEl.addEventListener("click",function(){ 
      let inputValue=inputFieldEl.value
      push(cartInDB,inputValue)
      
      clearInputFieldEl()
      
   })
   
   function clearShoppingListEl() {
      orderListEl.innerHTML = ""
   }

   function clearInputFieldEl() {
      inputFieldEl.value = ""
   }

   function loadListValue(inputval){
      orderListEl.innerHTML += `<li>${inputval}</li>`
   }