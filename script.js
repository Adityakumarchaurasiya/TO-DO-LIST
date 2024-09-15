let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ol=document.querySelector("ol");


btn.addEventListener("click" , function(){
   let item=document.createElement("li");
   item.innerText=inp.value;
let dltbtn=document.createElement("button");
dltbtn.innerText="delete";
dltbtn.classList.add("delete");
   item.appendChild(dltbtn);
ol.appendChild(item);
inp.value="";
})



ol.addEventListener("click",function(event){
   if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
   }
})