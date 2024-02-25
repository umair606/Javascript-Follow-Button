var isstatus = document.querySelector("#p");
var add = document.querySelector("#add");

var flag = 0;

add.addEventListener('click',()=>{
  if(flag == 0 ){
    isstatus.innerHTML = "Friend ✓";
    isstatus.style.color = "#549e51" 
    isstatus.style.fontWeight ="700";
    add.innerHTML= "Remove";
    add.style.color = "black";
    add.style.backgroundColor = "#c7c4c4";
    flag =1;
  }
  else{
    isstatus.innerHTML = "Stranger";
    isstatus.style.color = "#959595"; 
    isstatus.style.fontWeight ="500";
    add.innerHTML= "Add Friend";
    add.style.color = "black";
    add.style.backgroundColor = "hotpink";
    flag =0;
  }
 
})
