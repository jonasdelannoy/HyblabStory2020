$(document).ready(function() {
    $.getJSON("data/resources.json", function(json) {
        console.log(typeof $('#range').val());
        $('#range').on('input', function () {
            let step = 61;


            let numberRange = Math.trunc(parseInt($('#range').val())/step);
            // console.log(parseInt($('#range').val()) + ' / ' + step + ' = ' + numberRange);
            let rangeId = numberRange.toString();

            let figure_selected = $('.textFigure span').eq(numberRange);

            $('.textFigure span').each(function (index) {
                $('.textFigure span').eq(index).removeClass('figure-selected');
            });

            figure_selected.addClass("figure-selected");
            figure_selected.innerHTML = 'Aloo';

            // let modulo = numberRange;
            let dataFigure = json['figures'][rangeId];
            let nb =  json['figures'][rangeId]['number'];
            let des =  json['figures'][rangeId]['description'];
            let item =  json['figures'][rangeId]['item'];

            $('#le_figure').text(nb);
            $('#light').text(des);
            $('#bolder').text(item);
        });
    });
});
