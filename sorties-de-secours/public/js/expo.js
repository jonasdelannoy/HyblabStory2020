$(document).ready(function() {

    var circle_positions = [];
    var eraser_size = 50;

    let stage = new Konva.Stage({
        container: 'expo-konva',
        width: window.innerWidth,
        height: window.innerHeight
    });

    let layer_cover = new Konva.Layer();
    let layer_discover = new Konva.Layer();
    stage.add(layer_cover, layer_discover);

    let group = new Konva.Group({
        clipFunc: function(ctx) {
            for (let i=0 ; i<circle_positions.length ; i++) {
                ctx.moveTo(circle_positions[i].x, circle_positions[i].y);
                ctx.arc(circle_positions[i].x, circle_positions[i].y, eraser_size, 0, Math.PI * 2, false);
            }
        },
        draggable: false
    });

    // cover
    let image_cover = new Image();
    image_cover.onload = () => {
        let k_image_cover = new Konva.Image({
            x: 0,
            y: 0,
            image: image_cover,
            width: window.innerWidth,
            height: window.innerHeight
        });

        layer_cover.add(k_image_cover);
        layer_cover.batchDraw();

        // discover
        let image_discover = new Image();
        image_discover.onload = () => {
            let k_image_discover = new Konva.Image({
                x: 0,
                y: 0,
                image: image_discover,
                width: window.innerWidth,
                height: window.innerHeight
            });

            group.add(k_image_discover);
            layer_discover.add(group);
            layer_discover.batchDraw();
        };
        image_discover.src = 'img/expo-discover.png';

    };
    image_cover.src = 'img/expo-cover.png';


    // EVENTS
    var mouseDown = false;

    stage.on('mousedown touchstart', function() {
        mouseDown = true;
    });

    stage.on('mouseup touchend', function() {
        mouseDown = false;
    });

    // and core function - drawing
    stage.on('mousemove touchmove', function() {
        if (!mouseDown) {
            return;
        }
        const pos = stage.getPointerPosition();
        circle_positions.push({
            x: pos.x,
            y: pos.y
        });
        group.draw();
    });


});
