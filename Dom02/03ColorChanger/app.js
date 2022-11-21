let clickMe = document.getElementById('button');

const bgColorChanger = () => {
    let valuData = '0123456789abcdef'
    let strings = '#'; 
    for (let i = 0; i < 6; i++) {
        strings = strings + valuData[Math.round(Math.random()*16)];
    }
    return strings;
}

function changeRandomColor(){
    document.querySelector('#canvas').style.backgroundColor = bgColorChanger(); 
};

clickMe.addEventListener('click', changeRandomColor);