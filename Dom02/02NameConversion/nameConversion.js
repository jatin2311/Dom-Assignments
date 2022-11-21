let data = document.querySelector("#convert-btn");
data.addEventListener('click', ()=>{
    camelCase(document.querySelector('#text').value);
    pascalCase(document.querySelector('#text').value);
    snakeCase(document.querySelector('#text').value);
    kebabCase(document.querySelector('#text').value);
    screamingSnakeCase(document.querySelector('#text').value);
    screamingKebabCase(document.querySelector('#text').value);
});

function camelCase (x){
    let ccData = new String();
    let camelCaseData = new String(x).toLowerCase().split('');
    let nextWordCap = false;
    camelCaseData.forEach((e)=>{
        if (e === " ") {
            nextWordCap = true;
        }else if (nextWordCap){
            ccData = ccData + e.toUpperCase();
            nextWordCap = false;
        }else{
            ccData = ccData + e;
        }
    })
    document.querySelector('#camel-case').textContent = ccData;
};

function pascalCase (x){
    let pcData = new String();
    let pascalcaseData = new String(x).toLowerCase().split('');
    pascalcaseData = pascalcaseData.splice(0, 1, pascalcaseData[0].toUpperCase());
    let nextWordCap = false;

    pascalcaseData.forEach((e)=>{
        if (e === " ") {
            nextWordCap = true;
        }else if (nextWordCap){
            pcData = pcData + e.toUpperCase();
            nextWordCap = false;
        }else{
            pcData = pcData + e;
        }
    })
    document.querySelector('#pascal-case').textContent = pcData;
};
    
    

function snakeCase(x) {
    let scData = new String();
    let snakeCaseData = new String(x).toLowerCase().split("");
    snakeCaseData.forEach((e)=> {
        if (e === " ") {
            scData = scData + "_"
        }else{
            scData = scData + e;
        }
    })
    document.querySelector("#snake-case").textContent = scData;
    
}

function screamingSnakeCase(x){
    let ssData = new String();
    let sSnakeCaseData = new String(x).toUpperCase().split("");
    sSnakeCaseData.forEach((e)=> {
        if(e === " "){
        ssData = ssData + "_";
        }else{
            ssData = ssData + e;
        }
    });
    document.querySelector('#screaming-snake-case').textContent = ssData;
}

function kebabCase(x){
    let kcData = new String();
    let kCaseData = new String(x).toLowerCase().split("");
    kCaseData.forEach((e)=> {
        if(e === " "){
            kcData = kcData + "-";
        }else{
            kcData += e;
        }
    })
    document.getElementById('kebab-case').textContent = kcData;
}

function screamingKebabCase(x){
    let skData = new String();
    let sKebabCaseData = new String(x).toUpperCase().split("");
    sKebabCaseData.forEach((e)=> {
        if(e === " "){
        skData = skData + "-";
        }else{
            skData = skData + e;
        }
    });
    document.getElementById('screaming-kebab-case').textContent = skData;
}
