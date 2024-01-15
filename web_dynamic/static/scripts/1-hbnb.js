//Author: FiraolTulu
window.addEventListener('load', function () {

    const locamenityIds = {};
    $('input[type=checkbox]').change(function () {
        if ($(this).prop('checked')) {
            locamenityIds[$(this).attr('data-id')] = $(this).attr('data-name');
        } else if (!$(this).prop('checked')) {
            delete locamenityIds[$(this).attr('data-id')];
        }
        if (Object.keys(locamenityIds).length === 0) {
            $('div.amenities h4').html('&nbsp');
        } else {
            $('div.amenities h4').text(Object.values(locamenityIds).join(', '));
        }
    });

});