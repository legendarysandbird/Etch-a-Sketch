div = document.querySelector('div');

createBoard(16);


btn = document.querySelector('button');
btn.addEventListener('click', createBoard);

function createBoard(size = 'undefined') {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => div.removeChild(square));
    if (typeof(size) !== 'number') {
        size = prompt('Squares per side of new grid?');
    }
    container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i=0; i<(size ** 2); i++) {
        grid = document.createElement('div');
        grid.classList.add("square");
        grid.addEventListener("mouseover", (e) => e.currentTarget.style.backgroundColor = 'black');
        div.appendChild(grid);
    }
}
