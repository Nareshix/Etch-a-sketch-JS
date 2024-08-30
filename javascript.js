const container = document.querySelector('#container');

for (let i = 0; i < (16*16); ++i){
    const newDiv = document.createElement('div');
    newDiv.style.aspectRatio = '1/1';
    newDiv.classList = 'box';
    container.append(newDiv);
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', (event) =>{
        event.target.style.backgroundColor = 'blue'
    })
});