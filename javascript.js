const container = document.querySelector('#container');

for (let i = 0; i < (16*16); ++i){
    const newDiv = document.createElement('div');
    newDiv.textContent = '1';
    newDiv.classList = 'box';
    newDiv.style.aspectRatio = '1/1';
    newDiv.style.width = '50%';
    container.append(newDiv);
}

const box = document.querySelectorAll('box');
