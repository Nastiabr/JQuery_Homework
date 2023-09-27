$(document).ready(function() {
    $("h3").each(function() {
        var div = $(this).next("div");
        if (div.length) {
            $(this).before(div);
        }
    });
});