const quote = document.querySelector('.head');
const quoteTitle = document.querySelector('.sub-head-title');
const refreshBtn = document.querySelector('#refresh');

let initial = 1;


function renderer() {
    quote.innerText = quoteData[(initial) - 1 ].quote;
    quoteTitle.innerText = quoteData[(initial) - 1].author;
}
renderer();


function random(){
    let value = Math.floor(Math.random() * 10);
    initial = value;
    renderer()
}

refreshBtn.addEventListener('click', random);

