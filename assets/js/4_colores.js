const divs = document.querySelectorAll('div');

divs.forEach(div => {
    div.addEventListener('click', function() {
        this.style.backgroundColor = 'black';
    });
});

let color;
const generatorSection = document.querySelector('.generatorDivs');

document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');

    if (event.key === 'a') {
        color = 'pink';
    } else if (event.key === 's') {
        color = 'orange';
    } else if (event.key === 'd') {
        color = 'lightblue';
    } else if (event.key === 'q') {
        color = 'purple';
        createNewDiv(color);
    } else if (event.key === 'w') {
        color = 'gray';
        createNewDiv(color);
    } else if (event.key === 'e') {
        color = 'brown';
        createNewDiv(color);
    }

    if (color && ['a', 's', 'd'].includes(event.key)) {
        keyDiv.style.backgroundColor = color;
    }
});

function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');  
    newDiv.style.backgroundColor = color; 
    generatorSection.appendChild(newDiv);  
}
