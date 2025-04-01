let sp= document.getElementById("sp")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

let reqem =0 
btn1.addEventListener("click",function(){
    reqem -- 
    sp.innertext= reqem
})
btn2.addEventListener("click", function (){
    sp.innerText = reqem
    reqem= 0
 })

btn3.addEventListener("click", function(){
    reqem++
    sp.innerText = reqem;
})