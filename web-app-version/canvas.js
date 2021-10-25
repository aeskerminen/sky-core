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

        ctx.lineWidth = 10
        ctx.lineCap = 'round'

        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }

    canvas.addEventListener('mousedown', startPos)
    canvas.addEventListener('mouseup', finishedPos)
    canvas.addEventListener('mousemove', draw)
})

function color(color) {    
    const ctx = document.querySelector('#canvas').getContext('2d')
    switch (color) {
        case 'r':
            ctx.strokeStyle = '#FF0000'
            break;
        case 'g':
            ctx.strokeStyle = '#00FF00'
            break;
        case 'b':
            ctx.strokeStyle = '#0000FF'
            break;
    }
}

function download(){
    var download = document.getElementById("download");
    var image = document.getElementById("canvas").toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}