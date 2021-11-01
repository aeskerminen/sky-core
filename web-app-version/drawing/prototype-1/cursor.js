let on = false

$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        if (!on) return
        $('#circularcursor').css({
            left: e.pageX,
            top: e.pageY
        });
    })
  });

function toggleMouse(bool) {
    on = bool
    document.getElementById('html').style.cursor = bool ?  'none' : 'auto'
    document.getElementById('circularcursor').style.visibility = bool ? 'visible' : 'hidden'
}