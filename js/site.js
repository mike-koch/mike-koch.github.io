var loadJquery = function() {
    //-- Activate popovers
    $('[data-toggle="popover"]').popover({
        trigger: 'hover',
        container: 'body',
        placement: 'top'
    });
};

jQuery(document).ready(loadJquery);