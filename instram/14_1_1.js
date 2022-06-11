 document.addEventListener("DOMContentLoaded",
   function(e){
       let configID=document.querySelector("#id i")
       let idtext=document.querySelector("#id span")
      

       configID.addEventListener("click",
          function(e){
               idtext.textContent=prompt("새로운 아이디를 입력하세요")
             
          }
          )

          
   }
 )