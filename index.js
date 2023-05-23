   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
   import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

      const appSettings = {
                        databaseURL: "https://cart-7c2f5-default-rtdb.asia-southeast1.firebasedatabase.app/"
                           }

      const app = initializeApp(appSettings)
      const database = getDatabase(app)
      const cartInDB = ref(database, "myCart")

      const inputFieldEl=document.getElementById("input-field")
      const addButtonEl=document.getElementById("add-button")
      const orderListEl=document.getElementById("order-list")
//---------------------------------------
         // onValue(cartInDB,function(snapshot){
            
         //       if(snapshot.exists())
         //       {
         //          let listItem=Object.entries(snapshot.val())
                  
         //          clearShoppingListEl()
         //             for (let i=0; i<listItem.length; i++)
         //             {
         //                let currentItem=listItem[i]

         //                let currenItemName=currentItem[1]
         //                let currenItemId=currentItem[0]
         //                loadListValue(currentItem)
         //             }
         //       }
         //       else{
         //             orderListEl.innerHTML = "No items here..."
         //       }
         // })
//---------------------------------------------------------------------
         addButtonEl.addEventListener("click",function(){ 
               let inputValue=inputFieldEl.value
               push(cartInDB,inputValue)
               loadListValue(inputValue)
               clearInputFieldEl()
         
         })
//--------------------------------------------------------------------- 
         function clearShoppingListEl() {
               orderListEl.innerHTML = ""
         }

         function clearInputFieldEl() {
               inputFieldEl.value = ""
         }
//--------------------------------------------------------------------
         function loadListValue(inputval){
            
               let itemName=inputval
               //let itemId=inputval[0]
               let newEl=document.createElement("li")
               newEl.textContent=itemName
               console.log(inputval)
               //console.log(itemId)

               newEl.addEventListener("click",function(){
            
                 // let deltItem=ref(database,`myCart/${itemId}`)
                  
                  //remove(deltItem)
               })
               orderListEl.append(newEl)
         }

