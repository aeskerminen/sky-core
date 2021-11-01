let eraser = false

window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')

    let painting = false

    function startPos(e) {
        painting = true
        draw(e)
    }

    function finishedPos() {
        painting = false
        ctx.beginPath()
    }

    function draw(e) {
        if(!painting) return

        ctx.lineCap = 'round'

        if(!eraser) {
            ctx.globalCompositeOperation="source-over";
            ctx.lineTo(e.clientX, e.clientY)
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(e.clientX, e.clientY)
        }
        else {
            ctx.globalCompositeOperation="destination-out";
            ctx.lineTo(e.clientX, e.clientY)
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(e.clientX, e.clientY)
        }
       
    }

    canvas.addEventListener('mousedown', startPos)
    canvas.addEventListener('mouseup', finishedPos)
    canvas.addEventListener('mousemove', draw)
})

function setStrokeColor(picker) {    
    const ctx = document.querySelector('#canvas').getContext('2d')
    ctx.strokeStyle = picker.value
}

function setCanvasColor(picker) {    
    document.getElementById('canvas').style.backgroundColor = picker.value
}

function setWidth(picker) {    
    const ctx = document.querySelector('#canvas').getContext('2d')
    ctx.lineWidth = picker.valueAsNumber
}

function setEraser() {
    eraser = !eraser
}

function download(){
    var download = document.getElementById("download");
    var image = document.getElementById("canvas").toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}

module.exports = {
    setEraser : setEraser,
    setWidth : setWidth,
    setCanvasColor : setCanvasColor,
    setStrokeColor : setStrokeColor
}