$(document).ready(function(){
    showIntrari()
})

function showIntrari() {
    $.get('/intrari', function(){
        $.get( "/intrari", function( data ) {
            var html = ''
            data.forEach(function(intrare) {
                html = html + '<li><a href="#">'+intrare.nr_intrare+'</a></li>'
            })
            $('#Intrari').html(html)
        });
    })
}

