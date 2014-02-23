$.cergis = $.cergis || {};

$.cergis.loadContent = function () {

    // show ajax loader
    $('.ajax-loader').show();

    // get the html in the content div
    $.ajax({


        url: pageUrl + '?type=ajax', success: function (data) {
            $('#content').html(data);
            // hide ajax loader
            $('.ajax-loader').hide();
        }
    });

    // change browser url to the one user clicked
    if (pageUrl != window.location) {
        window.history.pushState({ path: pageUrl }, '', pageUrl);
    }

}

$.cergis.backForwardButtons = function () {
    // override the back and forward buttons, so that we get the right content without refreshing the page
    $(window).on('popstate', function () {
        $.ajax({
            url: location.pathname + '?type=ajax', success: function (data) {
                $('#content').html(data);
            }
        });
    });
}



// click event
$("a").on('click', function () {

    // item clicked
    pageUrl = $(this).attr('href');

    $.cergis.loadContent();
    return false;

});

$.cergis.backForwardButtons();