const MainTextarea = document.getElementById('MainTextarea');
const addbutton = document.getElementById('addbutton');
const taskssection = document.getElementById('taskssection');
const alltasksnum = document.getElementById('alltasksnum');
const complitedtasksnum = document.getElementById('complitedtasksnum');
const NOComplitedtasknum = document.getElementById('NOComplitedtasknum');
const linegraf = document.getElementById('linegraf');
const grafpercentNum = document.getElementById('grafpercentNum');
const PercentTasksGrafWrapper =document.getElementById('PercentTasksGrafWrapper');

let arrtasks = []
let indtasks = {
    all: 0,
    complited: 0,
    NoComplited: 0,
    percentGraf: 0
}

let idtask = arrtasks.length;




LoadLocalStorage()

updateIndicators()


addbutton.addEventListener('click',()=>{
    const dataValue = MainTextarea.value
    MainTextarea.focus();
if(dataValue.trim()){
    taskssection.insertAdjacentHTML('beforeend',`<div id="taskid${idtask}" class="taskLine">
        <input class="checkboxtask" type="checkbox">
        <div class="tasktextbox"><div class="taskClassText">${dataValue}</div></div>
        <div class="deltaskbutton">X</div>
    </div>`);
    arrtasks.push({id:idtask,data:dataValue,checked:false})
indtasks.all++
idtask++
SaveLocalStorage()
updateIndicators()
MainTextarea.value = ""
}
})

document.addEventListener('click', (e)=>{
   const delTaskButton = e.target.closest(".deltaskbutton")
   if(delTaskButton){
    const currentCheckbox = delTaskButton.parentElement.querySelector(".checkboxtask")
    if(currentCheckbox.checked === true){indtasks.complited--}
    const fullElement = e.target.parentElement
    const idElement = Number(fullElement.id.slice(6))

const index = arrtasks.findIndex(arrtasks => arrtasks.id === idElement)
if(index !== -1){arrtasks.splice(index,1)}
    fullElement.style.animation = "EraseTask 0.5s linear forwards"
    setTimeout(() => {
       fullElement.remove();
        if(indtasks.all > 0){
        indtasks.all--;
        SaveLocalStorage()
        updateIndicators()}
    }, 500);
   }
})

document.addEventListener('click', (e)=>{
    const currentCheckbox = e.target.closest(".checkboxtask")
if (currentCheckbox){
    
    const fullElement = e.target.parentElement
    const idElement = Number(fullElement.id.slice(6))
const index = arrtasks.findIndex(arrtasks => arrtasks.id === idElement)

if(index !== -1 && currentCheckbox.checked === true){arrtasks[index].checked = true;
indtasks.complited++
SaveLocalStorage()
updateIndicators()
}
else if(index !== -1 && currentCheckbox.checked === false){
    arrtasks[index].checked = false;indtasks.complited--
SaveLocalStorage()
updateIndicators()
}else{}

}
});


function updateIndicators(){
    alltasksnum.innerText = indtasks.all;
    complitedtasksnum.innerText = indtasks.complited;
    if(indtasks.all != -1 && indtasks.complited != -1){
        if(indtasks.all - indtasks.complited >= 0){
        indtasks.NoComplited = indtasks.all - indtasks.complited
        }
    }
    NOComplitedtasknum.innerText = indtasks.NoComplited;


if(indtasks.all > 0){
indtasks.percentGraf = Math.ceil((indtasks.complited / indtasks.all) * 100)
grafpercentNum.innerText = indtasks.percentGraf + "%"
let rotatingGraf = (indtasks.percentGraf / 100) * 360
linegraf.style.transform =  `rotate(${rotatingGraf}deg)`
if(rotatingGraf > 180){

    setTimeout(() => {
                   PercentTasksGrafWrapper.style.setProperty('--afterGraf-opacity','1');
    PercentTasksGrafWrapper.style.setProperty('--afterGraf-bg','linear-gradient(blue,blue)');
     PercentTasksGrafWrapper.style.setProperty('--beforeGraf-opacity','0'); 
    }, 280);

}else{
    setTimeout(() => {
            PercentTasksGrafWrapper.style.setProperty('--beforeGraf-opacity','1');
    PercentTasksGrafWrapper.style.setProperty('--afterGraf-opacity','0');
    }, 280);

}
}else if(indtasks.all === 0){
grafpercentNum.innerText = "0%"
linegraf.style.transform = 'rotate(0deg)'
    setTimeout(() => {
            PercentTasksGrafWrapper.style.setProperty('--beforeGraf-opacity','1');
    PercentTasksGrafWrapper.style.setProperty('--afterGraf-opacity','0');
    }, 280);
}



}

function SaveLocalStorage(){
localStorage.setItem('arrtasks', JSON.stringify(arrtasks));
localStorage.setItem('indtasks', JSON.stringify(indtasks));
localStorage.setItem('idtask', JSON.stringify(idtask));



}
function LoadLocalStorage(){
    if(localStorage.length >= 3){
const Parsedarrtasks = JSON.parse(localStorage.getItem('arrtasks'));
const Parsedindtasks = JSON.parse(localStorage.getItem('indtasks'));
const Parsedidtask = JSON.parse(localStorage.getItem('idtask'));

arrtasks = Parsedarrtasks;
indtasks = Parsedindtasks;
idtask = Parsedidtask;



for (let i = 0; i < arrtasks.length; i++) {
    if (arrtasks[i].checked === true) {
taskssection.insertAdjacentHTML('beforeend', `
    <div id="taskid${arrtasks[i].id}" class="taskLine">
      <input class="checkboxtask" type="checkbox">
      <div class="tasktextbox"><div class="taskClassText">${arrtasks[i].data}</div></div>
      <div class="deltaskbutton">X</div>
    </div>
  `);

  const currentTask = document.querySelector(`#taskid${arrtasks[i].id}`);
  const currentCheckbox = currentTask.querySelector('.checkboxtask');
  currentCheckbox.checked = true;
    } else {
              taskssection.insertAdjacentHTML('beforeend', `
    <div id="taskid${arrtasks[i].id}" class="taskLine">
      <input class="checkboxtask" type="checkbox">
      <div class="tasktextbox"><div class="taskClassText">${arrtasks[i].data}</div></div>
      <div class="deltaskbutton">X</div>
    </div>
  `);
    }
    
}

}
}