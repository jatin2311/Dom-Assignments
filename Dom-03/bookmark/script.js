// let inputData = document.querySelector('.input');
let inputName = document.querySelector('.input-name');
let inputUrl = document.querySelector('.input-url');
let button = document.querySelector('.addButton');

let data = [];
button.addEventListener('click', ()=> {
    let storeName = inputName.value;
    let storeUrl = inputUrl.value;
    if (!storeName.trim()){
        console.log("Input is empty");
    }
    else{
        console.log(storeName);
        console.log(storeUrl);
        data.push({name: storeName, url: storeUrl});
        inputName.value=''
        inputUrl.value=''
        storeName=''
        storeUrl=''
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
        let titleUrl = document.createElement('p');
        let deleteB = document.createElement('button');
        deleteB.classList.add('deleteButton');
        deleteB.textContent =  "delete" ;
        deleteB.style.cssText="float:right;"
        title.classList.add('item_input');
        titleUrl.classList.add('item_input');
        title.textContent = e.name;
        titleUrl.textContent = e.url;
        let span = document.createElement('span');
        span.textContent = i;
        span.style.cssText = 'display:none;'
        title.appendChild(deleteB);
        parentCard.appendChild(title);
        parentCard.appendChild(titleUrl);
        parentCard.appendChild(span);
        parentContainer.appendChild(parentCard);
        deleteB.addEventListener(('click'),(e)=>{deleteFunc(e)});
    })
};
renderer();


function deleteFunc(t){
    const index=t.target.parentNode.parentNode.querySelector('span').textContent
    data.splice(index,1)
    renderer();
}