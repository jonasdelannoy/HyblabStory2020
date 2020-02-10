var musicFinished = false;
var vinylTurning = false;

$(document).ready(function() {

    var stageWidth = window.innerWidth;
    var stageHeight = window.innerHeight;

    let stage = new Konva.Stage({
        container: 'music-konva',
        width: stageWidth,
        height: stageHeight
    });

    let vinyl = new Image();
    let k_vinyl = new Konva.Image();

    let vinyl_center = new Image();
    let k_vinyl_center = new Konva.Image();

    let support = new Image();
    let k_support = new Konva.Image();

    let layer = new Konva.Layer();
    stage.add(layer);

    let group = new Konva.Group({
        draggable: true,
        dragBoundFunc: function(pos) {
            // disable drag
            return { x: 0, y: 0 };
        }
    });

    var k_vinyl_head = new Konva.Image({
        x: (( 1336 * ( 201 * (stageHeight / 810) ) ) / 201 ) + (( ( (stageHeight*1920) / 1080) - ((stageHeight*1920) / 810) ) / 2 ),
        y: 201 * (stageHeight / 810),
        width: ( 207 * (563 * (stageHeight / 810)) ) / 563,
        height: 563 * (stageHeight / 810)
    });

    let image_turntable = new Image();
    image_turntable.onload = () => {
        let k_turntable = new Konva.Image({
            x: ( ( (stageHeight*1920) / 1080) - ((stageHeight*1920) / 810) ) / 2,
            y: 0,
            width: (stageHeight*1920) / 810,
            height: stageHeight,
            image: image_turntable,
        });
        layer.add(k_turntable);
        layer.batchDraw();

        // vinyl
        vinyl.onload = () => {
            k_vinyl = new Konva.Image({
                x: ((916 * (397 * (stageHeight / 810))) / 397 ) + (( ( (stageHeight*1920) / 1080) - ((stageHeight*1920) / 810) ) / 2 ),
                y: 397 * (stageHeight / 810),
                width: 691 * (694 * (stageHeight / 810)) / 694,
                height: 694 * (stageHeight / 810),
                image: vinyl,
            });
            k_vinyl.offset({
                x: (691 * (694 * (stageHeight / 810)) / 694) / 2,
                y: (694 * (stageHeight / 810)) / 2
            });
            layer.add(k_vinyl);
            layer.batchDraw();

            // vinyl_center
            vinyl_center.onload = () => {
                k_vinyl_center = new Konva.Image({
                    x: ((916 * (397 * (stageHeight / 810))) / 397 ) + (( ( (stageHeight*1920) / 1080) - ((stageHeight*1920) / 810) ) / 2 ),
                    y: 397 * (stageHeight / 810),
                    width: ( 280 * (281 * (stageHeight / 810))) / 281,
                    height: 281 * (stageHeight / 810),
                    image: vinyl_center,
                });
                k_vinyl_center.offset({
                    x: (280 * (281 * (stageHeight / 810)) / 281) / 2,
                    y: (281 * (stageHeight / 810)) / 2
                });
                layer.add(k_vinyl_center);
                layer.batchDraw();

                // support.onload = () => {
                //     k_support = new Konva.Image({
                //         x: ((916 * (405 * (stageHeight / 810))) / 405 ) + (( ( (stageHeight*1920) / 1080) - ((stageHeight*1920) / 810) ) / 2 ),
                //         y: 405 * (stageHeight / 810),
                //         width: ( 77 * (78 * (stageHeight / 810))) / 78,
                //         height: 78 * (stageHeight / 810),
                //         image: support,
                //     });
                //     k_support.offset({
                //         x: (77 * (78 * (stageHeight / 810)) / 78) / 2,
                //         y: (78 * (stageHeight / 810)) / 2
                //     });
                //     layer.add(k_support);
                //     layer.batchDraw();
                // };
                // support.src = 'img/experience/music/support.png';

            };
            vinyl_center.src = 'img/experience/music/vinyl_center_1.png';

            // vinyl-head
            let vinyl_head = new Image();
            vinyl_head.onload = () => {
                k_vinyl_head.image(vinyl_head);
                k_vinyl_head.offset({
                    x: ( 105 * (133 * (stageHeight / 810)) ) / 133,
                    y: 133 * (stageHeight / 810)
                });

                group.add(k_vinyl_head);
                layer.add(group);

                // layer.add(k_vinyl_head);
                layer.batchDraw();
            };
            vinyl_head.src = 'img/experience/music/vinyl_head.png';

        };
        vinyl.src = 'img/experience/music/vinyl2.png';

    };
    image_turntable.src = 'img/experience/music/turntable.png';

    // EVENTS
    var mouseDown = false;

    var music_playing = 0;
    group.on('dragmove', function() {
        mouseDown = true;
        let pos = stage.getPointerPosition();

        let angleDeg = Math.atan2(201 * (stageHeight / 810) - pos.y, ((1336 * (201 * (stageHeight / 810))) / 201) + ((((stageHeight * 1920) / 1080) - ((stageHeight * 1920) / 810)) / 2) - pos.x) * 180 / Math.PI + 90;

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

            if (vinylTurning) {
                vinylAnim.stop();
                vinylCenterAnim.stop();
                vinylTurning = false;
            }

        } else {

            if (!vinylTurning) {
                vinylAnim.start();
                vinylCenterAnim.start();
                vinylTurning = true;
            }

            if (angleDeg >= 15 && angleDeg < 35) {

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
        }

        k_vinyl_head.rotation(angleDeg);
        layer.batchDraw();
    });

    // ANIMATIONS
    let amplitude = 2;
    let period = 5000;
    var vinylAnim = new Konva.Animation(function(frame) {
        k_vinyl.rotation( amplitude * Math.sin((frame.time * 2 * Math.PI) / period) );
    }, layer);

    let vinylCenterAmplitude = 150;
    let vinylCenterPeriod = 5000;
    var vinylCenterAnim = new Konva.Animation(function(frame) {
        k_vinyl_center.rotation( vinylCenterAmplitude * (frame.time * 2 * Math.PI) / vinylCenterPeriod);
    }, layer);

    // EVENTS

    setTimeout(function () {
        musicFinished = true;
    }, 2500);

    $('#music-section').on('mousewheel', function () {
        if (musicFinished) {
            vinylAnim.stop();
            vinylCenterAnim.stop();
            initArticle('music');
        }
    });

});
