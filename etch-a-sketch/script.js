const DEFAULT_COLOR = "#333333"
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

function setCurrentColor(newColor){

}

function setCurrentMode(newMode){

}

function setCurrentSize(newSize){
    currentSize = newSize
}

const colorPicker = document.getElementById('colorPicker')
const colorButton = document.getElementById('colorButton')
const rainbowButton = document.getElementById('rainbowButton')
const eraserButton = document.getElementById('eraserButton')
const clearButton = document.getElementById('clearButton')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const grid= document.getElementById('grid')

colorPicker.oninput = (e) => setCurrentColor(e.target.value)
colorButton.onclick= () => setCurrentMode('color')
rainbowButton.onclick= () => setCurrentMode('rainbow')
eraserButton.onclick= () => setCurrentMode('eraser')
clearButton.onclick= () => setCurrentMode('clear')
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)