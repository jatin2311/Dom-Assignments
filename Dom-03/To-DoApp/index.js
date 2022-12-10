let inputData = document.querySelector('.input');
let button = document.querySelector('.addButton');

let data = [];
button.addEventListener('click', ()=> {
    let store = inputData.value;
    if (!store.trim()){
        console.log("Input is empty");
    }
    else{
        console.log(store);
        data.push(store);
        inputData.value=''
        store=''
        renderer();
    }
  
})

let parentContainer = document.querySelector('.container');
function renderer() {
    parentContainer.innerHTML=''
    data.forEach((e, i)=>{
        let parentCard = document.createElement('div');
        parentCard.classList.add('item');
        let title = document.createElement('p');
        let deleteB = document.createElement('button');
        deleteB.classList.add('deleteButton');
        deleteB.textContent =  "delete" ;
        deleteB.style.cssText="float:right;"
        let editB = document.createElement('button');
        editB.classList.add('editButton');
        editB.innerHTML = `edit`;
        editB.style.cssText="float:right;"
        title.classList.add('item_input');
        title.textContent = e;
        let span = document.createElement('span');
        span.textContent = i;
        span.style.cssText = 'display:none;'
        title.appendChild(deleteB);
        title.appendChild(editB);
        parentCard.appendChild(title);
        parentCard.appendChild(span);
        parentContainer.appendChild(parentCard);
        editB.addEventListener(('click'),(e)=>{editFunc(e)});
        deleteB.addEventListener(('click'),(e)=>{deleteFunc(e)});
    })
};
renderer();


function deleteFunc(t){
    const index=t.target.parentNode.parentNode.querySelector('span').textContent
    data.splice(index,1)
    renderer();
}

function editFunc(t){
    const index = t.target.parentNode.parentNode.querySelector("span").textContent;
    console.log(index);
    let newValue = prompt("Enter new Task",data[index]);
    data.splice(index,1,newValue)
    renderer();
}