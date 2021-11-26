
let slate, ctx;
let tool = {
    x: 0,
    y: 0,
    size: 5,
    color: '#000000',
    check: false
}
let strokes = []
let atmStrokes = null


function paint() {
    ctx.clearRect(0, 0, slate.width(), slate.height())
    ctx.linecap = 'round'
    for (let i = 0; i < strokes.length; i++) {
        let temp1 = strokes[i]
        ctx.strokeStyle = temp1.color
        ctx.lineWidth = temp1.size


        ctx.beginPath()
        ctx.moveTo(temp1.points[0].x, temp1.points[0].y);
        for (let j=0; j < temp1.points.length; j++) {
            let temp2 = temp1.points[j]
            ctx.lineTo(temp2.x, temp2.y)
        }
        ctx.stroke()
    }
}

function start () {
    slate = $('#paint');
    slate.attr({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    ctx = slate[0].getContext('2d')

    function userMouse (e) {
        tool.x = e.pageX
        tool.y = e.pageY
        atmStrokes.points.push({
            x: tool.x, 
            y: tool.y
        })
        paint()
    }
    slate.m

    slate.mousedown(function(e) {
        tool.check = true

        atmStrokes = {
            size: tool.size,
            color: tool.color,
            points: []
        }
        strokes.push(atmStrokes)
        
        userMouse(e)
    }).mouseup(function(e) {
        tool.check = false

        userMouse(e)
        atmStrokes = null
    }).mousemove(function(e) {
        if (tool.check) {
            userMouse(e)
        }
    })

    function undo() {
        strokes.pop()
        paint()
    }
    function erase() {
        strokes = []
        paint()
    }
    function color() {
        tool.color = document.querySelector('#color-id').value
    }
    function size() {
        tool.size = document.querySelector('#tool-size').value
    }

    document.querySelector('#undo').addEventListener('click', undo)
    document.querySelector('#erase').addEventListener('click', erase)
    document.querySelector('#color-id').addEventListener('change', color)
    document.querySelector('#tool-size').addEventListener('change', size)
}
$(start)