const container = document.querySelector('#container');
const button = document.querySelector('button');

const createGrid = (sides=16) => {
    container.style.display = 'grid';

    container.style.width = '960px';
    container.style.height = '960px';
    container.style.border = 'solid rebeccapurple';

    container.style.gridTemplateColumns = `repeat(${sides}, ${960/sides}px)`;
    container.style.gridTemplateRows = `repeat(${sides}, ${960/sides}px)`;

    for (let i = 0; i < (sides*sides); ++i){
        const newDiv = document.createElement('div');
        newDiv.style.aspectRatio = '1/1';
        newDiv.classList = 'box';
        newDiv.style.border = '1px solid black';
        container.append(newDiv);
    }    
}

const enableColouring = () => {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', (event) =>{
            event.target.style.backgroundColor = 'blue';
        })
    });    
}

const displayBoxNumber = (sides) =>{
    let boxNumber = document.querySelector('#box-number');    
    boxNumber.textContent = sides;
}

button.addEventListener('click', () => {
    sides = Number(window.prompt('No. of boxes per side to'));

    // To prevent lag on user's computer
    if (sides > 100){
        alert('Pls enter a number <= 100');
    }
    else{
        document.querySelectorAll('.box').forEach( box => box.remove());
        createGrid(sides);
        displayBoxNumber(sides);
        enableColouring();

    }

})



//Default behaviour
createGrid();
enableColouring();
