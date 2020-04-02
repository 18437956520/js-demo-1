let divv = document.createElement('div');
divv.className = 'divv'
document.body.appendChild(divv);

var dragging = false

var lastX
var lastY

divv.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

document.body.onmousemove = function (e) {
    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(divv.style.top) || 0
        var left = parseInt(divv.style.left) || 0
        divv.style.top = top + deltaY + 'px'
        divv.style.left = left + deltaX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
}

divv.onmouseup = function () {
    dragging = false
}