'use strict'

// Initialise application
Board.init('board');
Pen.init(Board.ctx);
Pointer.onEmpty = _.debounce(Board.storeMemory.bind(Board), 1500);

// Attach event listener
var pointerDown = function pointerDown(e) {
    // Initialise pointer
    var pointer = new Pointer(e.pointerId);
    pointer.set(Board.getPointerPos(e));

    // Get function type
    Pen.setFuncType(e);
    // console.log(e);
    if (Pen.funcType === Pen.funcTypes.menu) Board.clearMemory();
    else drawOnCanvas(e, pointer, Pen);
}
var pointerMove = function pointerMove(e) {
    if (Pen.funcType && (Pen.funcType.indexOf(Pen.funcTypes.draw) !== -1)) {

        var pointer = Pointer.get(e.pointerId);
        drawOnCanvas(e, pointer, Pen);
    }
}
var pointerCancel = function pointerLeave(e) {
    Pointer.destruct(e.pointerId);
}
Board.dom.addEventListener('pointerdown', pointerDown);
Board.dom.addEventListener('pointermove', pointerMove);
Board.dom.addEventListener('pointerup', pointerCancel);
Board.dom.addEventListener('pointerleave', pointerCancel);

// Draw method
function drawOnCanvas(e, pointerObj, Pen) {
    if (pointerObj) {
        pointerObj.set(Board.getPointerPos(e));
        Pen.setPen(Board.ctx, e);

        if (pointerObj.pos0.x < 0) {
            pointerObj.pos0.x = pointerObj.pos1.x - 1;
            pointerObj.pos0.y = pointerObj.pos1.y - 1;
        }
        Board.ctx.beginPath();
        Board.ctx.moveTo(pointerObj.pos0.x, pointerObj.pos0.y)
        Board.ctx.lineTo(pointerObj.pos1.x, pointerObj.pos1.y);
        Board.ctx.closePath();
        Board.ctx.stroke();

        pointerObj.pos0.x = pointerObj.pos1.x;
        pointerObj.pos0.y = pointerObj.pos1.y;
    }
}

function setStrokeColor(picker) {
    Pen.colors.fg = picker.value
}

function changeCanvasZoom(value) {
    const step = 0.1
    if(value === 'plus') {
        Board.resolution += (Board.resolution < 5) ? step : 0
    }
    else if(value === 'minus') {
        Board.resolution -= (Board.resolution > 0.5) ? step : 0
    }
    else {
        console.log(`Invalid zoom mode: ${value}.`)
    }
}