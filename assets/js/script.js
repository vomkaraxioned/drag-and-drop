/* Author: 

*/
const start =document.querySelector(".start");
const restart =document.querySelector(".restart");
const priorities = document.querySelectorAll(".drop-area");
const tasks = document.querySelectorAll(".task");
let dragged, stop = false ;

function setDraggable(value) {
    tasks.forEach((task)=>{
        task.draggable = value;
         task.addEventListener('dragstart',(e)=>{
            dragged = e.target;
         });
     }
     );
}

restart.addEventListener('click',(e)=>{
    location.reload();
});

start.addEventListener('click',()=>{
    if(stop){
        start.innerHTML = "start";
        setDraggable(false);
        stop =false ;
    }else{
        start.innerHTML = "stop";
       setDraggable(true);
    }
    stop =true;
});


priorities.forEach((priority)=>{
    priority.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });
   priority.addEventListener('drop',(e)=>{
   priority.appendChild(dragged);
    e.preventDefault();
   });
});






















