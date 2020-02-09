<<<<<<< HEAD
$(document).ready(function() {

    let stage = new Konva.Stage({
        container: 'music-workshop-konva',
        width: window.innerWidth,
        height: window.innerHeight
    });

    let layer = new Konva.Layer();
    stage.add(layer);

    let group = new Konva.Group({
        draggable: true,
        dragBoundFunc: function(pos) {
            // disable drag
            return {
                x: 0,
                y: 0
            };
        }
    });

    var k_vinyl_head = new Konva.Image({
        x: 1170,
        y: 260,
        width: 284,
        height: 666
    });

    let image_vinyl = new Image();
    image_vinyl.onload = () => {
        let k_vinyl = new Konva.Image({
            x: 0,
            y: 0,
            image: image_vinyl
        });

        // vinyl-head
        let vinyl_head = new Image();
        vinyl_head.onload = () => {
            k_vinyl_head.image(vinyl_head);
            k_vinyl_head.offset({ x: 150, y: 190 });

            group.add(k_vinyl_head);
            layer.add(group);

            // layer.add(k_vinyl_head);
            layer.batchDraw();
        };
        vinyl_head.src = 'img/vinyl-head.png';

        layer.add(k_vinyl);
        layer.batchDraw();

    };
    image_vinyl.src = 'img/vinyl.jpg';

    // EVENTS
    var mouseDown = false;

    group.on('dragmove', function() {
        mouseDown = true;
        let pos = stage.getPointerPosition();

        let angleDeg = Math.atan2(260 - pos.y, 1170 - pos.x) * 180 / Math.PI + 90;
        // console.log("angle : " + angleDeg);

        if (angleDeg < 0) {
            angleDeg = 0;
        } else if (angleDeg > 50) {
            angleDeg = 50;
        }

        if (angleDeg < 15 || angleDeg > 50) {
            console.log("Musique OFF");
        } else if (angleDeg >= 15 && angleDeg < 30) {
            console.log("Musique 1");
        } else if (angleDeg >= 30 && angleDeg < 40) {
            console.log("Musique 2");
        } else if (angleDeg >= 40 && angleDeg <= 50) {
            console.log("Musique 3");
        }

        k_vinyl_head.rotation(angleDeg);
        layer.batchDraw();
    });

});
=======
$(document).ready(function() {

    var stageWidth = window.innerWidth;
    var stageHeight = window.innerHeight;

    let stage = new Konva.Stage({
        container: 'music-workshop-konva',
        width: stageWidth,
        height: stageHeight
    });


    let layer = new Konva.Layer();
    stage.add(layer);

    let group = new Konva.Group({
        draggable: true,
        dragBoundFunc: function(pos) {
            // disable drag
            return {
                x: 0,
                y: 0
            };
        }
    });

    var k_vinyl_head = new Konva.Image({
        x: 1000,
        y: 180,
    });

    let image_vinyl = new Image();
    image_vinyl.onload = () => {
        let k_vinyl = new Konva.Image({
            x: 0,
            y: 0,
            width: (stageHeight*1920) / 1080,
            height: stageHeight,
            image: image_vinyl
        });

        // vinyl-head
        let vinyl_head = new Image();
        vinyl_head.onload = () => {
            k_vinyl_head.image(vinyl_head);
            k_vinyl_head.offset({ x: 108, y: 150 });

            group.add(k_vinyl_head);
            layer.add(group);

            // layer.add(k_vinyl_head);
            layer.batchDraw();
        };
        vinyl_head.src = 'img/vinyl_head.png';

        layer.add(k_vinyl);
        layer.batchDraw();

    };
    image_vinyl.src = 'img/vinyl.jpg';

    // EVENTS
    var mouseDown = false;

    var music_playing = 0;
    group.on('dragmove', function() {
        mouseDown = true;
        let pos = stage.getPointerPosition();

        let angleDeg = Math.atan2(180 - pos.y, 1000 - pos.x) * 180 / Math.PI + 90;
        // console.log("angle : " + angleDeg);

        if (angleDeg < 0) {
            angleDeg = 0;
        } else if (angleDeg > 50) {
            angleDeg = 50;
        }

        /* CHANGE MUSIC */
        if (angleDeg < 15 || angleDeg > 50) {
            console.log("Musique OFF");
            music_playing = 0;
            set_music_pause("vinyl");
            set_music_volume("vinyl", 1);

        } else if (angleDeg >= 15 && angleDeg < 35) {

            if (music_playing !== 1) {
                console.log("Musique 1");

                change_music("vinyl", 'sons/baloji/Peau de Chagrin Bleu de Nuit.mp3');
                set_music_play("vinyl");
                music_playing = 1;
            }

        } else if (angleDeg >= 35 && angleDeg < 50) {

            if (music_playing !== 2) {
                console.log("Musique 2");

                change_music("vinyl", 'sons/baloji/L’Hiver Indien.mp3');
                set_music_play("vinyl");
                music_playing = 2;
            }

        }

        k_vinyl_head.rotation(angleDeg);
        layer.batchDraw();
    });

});
>>>>>>> origin/sorties-de-secours
