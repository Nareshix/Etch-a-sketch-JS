const container = document.querySelector('#container');
const button = document.querySelector('button');

const createGrid = (sides=16) => {
    for (let i = 0; i < (sides*sides); ++i){
        const newDiv = document.createElement('div');
        newDiv.style.aspectRatio = '1/1';
        newDiv.classList = 'box';
        newDiv.style.border = '1px solid black'
        container.append(newDiv);
    }    
}

const enableColouring = () => {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', (event) =>{
            event.target.style.backgroundColor = 'blue'
        })
    });    
}

button.addEventListener('click', () => {    // console.log(Number(window.prompt()));
    sides = Number(window.prompt());
    createGrid(sides);
    enableColouring()
})

createGrid();
enableColouring();