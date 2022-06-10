const board = document.querySelector('#board')
const colors = ['#e74c3c', '#8e44ad', '#3498db',
'ea67e22', '#2ecc71' , '##b8f620', '#20f6e2',
'#0ca7c0', '#16458c', '#610998', '#ba299b', '#f63585']
const SQUARES_NUMBER = 497

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
    
}