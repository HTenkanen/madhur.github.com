var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=');
        if (p.length != 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));




$(document).ready(function() {


    // $('#navigation').slicknav({prependTo:'#primary'});



    $("tr", "#highlight").mouseover(function() {
        $(this).addClass("hoverHighlighted");
    }).mouseout(function() {
        $(this).removeClass("hoverHighlighted");
    });

    // sociable
    $("img", "#social").fadeTo(10000, 0.4);

    $("img", "#social").hover(function() {
        $(this).stop().animate({
            opacity: 1
        }, 1);
    }, function() {
        $(this).stop().animate({
            opacity: 0.4
        }, 400);
    });

    var basefile;
    if (document.URL.indexOf("projects") != -1) {

        var uri = new URI(document.URL);
        var filename = uri.filename(); // returns string "hello.html" (no leading slash)
        var names = filename.split(".html");

        basefile = names[0];
        basefile = decodeURIComponent(basefile.trim());

        $("div#projects ul li a").each(function() {
            var anchorText = $(this).text();
            if (basefile == anchorText)
                $(this).addClass("active");
        });
    }





    $("a").each(function() {
        if ($(this).has("img").length) {

            $(this).fancybox();

        }
    });

    $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox();
});




// $(document).ready(function() {
// 	$(".share").click(function() {
// 		$(this).next().slideToggle("normal");
// 		$(this).toggleClass("active");
// 	}).next().hide();
// });




$(document).ready(function() {

    $(".accordion").click(function() {

        $(this).next().slideToggle("normal");

        $(this).toggleClass("active");

        return false;

    }).next().hide();







    $("img", "#thumbs").hover(function() {

        $(this).toggleClass("active");

    }, function() {

        $(this).toggleClass("active");

    });



    $("img", "#featured").hover(function() {

        $(this).toggleClass("active");

    }, function() {

        $(this).toggleClass("active");

    });


    var qstring = qs["q"];
    if (qstring != null) {
        $("#q").val(qstring);
    }



});


function htmlEncode(value) {
    return $('<div/>').text(value).html();
}

function htmlDecode(value) {
    return $('<div/>').html(value).text();
}


function Clickheretoprint() {
    var docprint = window.open("", "", "");
    var sWinHTML = document.getElementById('container').innerHTML;
    var heading = document.getElementsByTagName('h1')[0].innerHTML;
    docprint.document.open();
    docprint.document.write('<html><head><title>' + heading + '</title>');
    docprint.document.write('<link rel="stylesheet" href="/files/css/bootstrap.min.css" type="text/css" />');
    docprint.document.write('<link rel="stylesheet" type="text/css" href="/files/css/print.css">');
    docprint.document.write('</head><body onLoad="self.print()"><center>');
    docprint.document.write(sWinHTML);
    docprint.document.write('</center></body></html>');
    docprint.document.close();
    docprint.focus();
}