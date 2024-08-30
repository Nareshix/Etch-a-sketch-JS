const container = document.querySelector('#container');

for (let i = 0; i < (16*16); ++i){
    const div = document.createElement('div');
    div.textContent = '1';
    div.style.aspectRatio = '1/1';
    div.style.width = '50%';
    container.append(div);
}
