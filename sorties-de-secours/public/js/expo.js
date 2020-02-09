<<<<<<< HEAD
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
=======
$(document).ready(function() {

    var circle_positions = [];
    var eraser_size = 90;

    let stage = new Konva.Stage({
        container: 'expo-konva',
        width: window.innerWidth,
        height: window.innerHeight
    });

    let layer_premier_rang = new Konva.Layer();
    let layer_cover = new Konva.Layer();
    let layer_discover = new Konva.Layer();
    stage.add(layer_cover, layer_discover, layer_premier_rang);

    let group = new Konva.Group({
        clipFunc: function(ctx) {
            for (let i=0 ; i<circle_positions.length ; i++) {
                ctx.moveTo(circle_positions[i].x, circle_positions[i].y);
                ctx.arc(circle_positions[i].x, circle_positions[i].y, eraser_size, 0, Math.PI * 2, false);
            }
        },
        draggable: false
    });

    // PREMIER RANG
    let k_image_premier_rang = new Konva.Image();
    let image_premier_rang = new Image();
    image_premier_rang.onload = () => {
        k_image_premier_rang = new Konva.Image({
            x: 0,
            y: 0,
            image: image_premier_rang,
            width: window.innerWidth,
            height: window.innerHeight
        });

        layer_premier_rang.add(k_image_premier_rang);
        layer_premier_rang.batchDraw();
    };
    image_premier_rang.src = 'img/expo_premier_rang.png';

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


    // ANIMATIONS
    let stageWidth = stage.width();
    var anim_premier_rang = new Konva.Animation(function(frame) {
        console.log('playing anim');
        let position = frame.time - stageWidth;
        if (position >= 0) {
            position = 0;
            anim_premier_rang.stop();
        }
        k_image_premier_rang.x(position);
    }, layer_premier_rang);


    // EVENTS
    $(window).scroll(function() {
        if ($(document).scrollTop() >= $('#expo-section').offset().top - 50) {
            anim_premier_rang.start();
        }
    });

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
>>>>>>> origin/sorties-de-secours
