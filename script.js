var canvas = document.getElementById('myCanvas')
var input = document.getElementById('input')
var incriment = document.getElementById('incriment')
var decriment = document.getElementById('decriment')
var penThickness = document.getElementById('penThickness')
var erasebtn = document.getElementById('erase')
var ctx = canvas.getContext("2d");

let color = 'black'
let size = 10
isDrawing = false
let x
let y
penThickness.innerText = size

canvas.addEventListener('mousedown', (e)=>{
    isDrawing = true
    x = e.offsetX
    y = e.offsetY
})
canvas.addEventListener('mouseup', (e)=>{
    isDrawing = false
    x = undefined
    y = undefined
})
canvas.addEventListener('mousemove', (e)=>{
    if(isDrawing){
        const x2 =  e.offsetX
        const y2 =  e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})
function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}
function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size *2
    ctx.stroke()
}
erasebtn.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})
input.addEventListener('input', ()=>{
    color = input.value
})
incriment.addEventListener('click', ()=>{
    size +=5
    if(size > 50) size = 50
    penThickness.innerText = size
})
decriment.addEventListener('click', ()=>{
    size -= 5
    if(size < 5) size = 5
    penThickness.innerText = size
})
