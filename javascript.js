const container = document.querySelector('#container');
const changeBox = document.querySelector('#input');


// Got this snippet of code from StackOverflow: https://stackoverflow.com/questions/1484506/random-color-generator?page=1&tab=scoredesc#tab-top
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const createGrid = (sides=16) => {
    
    container.style.cssText = `
    display: grid; 
    width: 960px; 
    height: 960px;
    border: solid rebeccapurple;
    grid-template-columns: repeat(${sides}, 1fr);
    grid-template-rows: repeat(${sides}, 1fr);
    `;
    
    for (let i = 0; i < (sides*sides); ++i){
        const newDiv = document.createElement('div');
        newDiv.style.aspectRatio = '1/1';
        newDiv.classList = 'box';
        newDiv.style.border = '1px solid black';
        container.append(newDiv);
    }    
}

const enableColouring = (option='grey') => {
    let boxes = document.querySelectorAll('.box');

  // if its not a function, then it becomes a funciton "color = () => option"
    const colour = typeof option === 'function'? option : () => option; 

    boxes.forEach(box => {
        box.addEventListener('mouseover', (event) =>{
            event.target.style.backgroundColor = colour();
        })
    });    
}

changeBox.addEventListener('click', () => {
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



const rainbowButton = document.querySelector('#rainbow-colour')
rainbowButton.addEventListener('click', () => {
  enableColouring(getRandomColor);
})


const defaltColourButton = document.querySelector('#default-colour');
defaltColourButton.addEventListener('click', () => {
  enableColouring();
})


const displayBoxNumber = (sides) =>{
  let boxNumber = document.querySelector('#box-number');    
  boxNumber.textContent = sides;
}



//Default behaviour
createGrid();
enableColouring();
