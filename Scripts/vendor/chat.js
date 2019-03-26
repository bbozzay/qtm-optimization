var StorNextPDPPrimaryStorage = (function () {

    function initDrawer() {
        // connect drawer state
        var drawerOpenRight = -2,
            drawerClosedRight = -368,
            animationDuration = 400,
            animationEasing = 'swing',
            connectDrawer = $('.connectDrawer');

        connectDrawer.attr('data-state', 'closed');

        // set up connect drawers
        connectDrawer.click(function () {
            var currentState = connectDrawer.attr('data-state');
            if (connectDrawer.is(':animated') === false) {
                if (currentState === 'closed') {
                    // since it wont animate if it's already animating we can set the state now
                    connectDrawer.attr('data-state', 'opened');
                    connectDrawer.animate({ right: drawerOpenRight },
                        {
                            duration: animationDuration,
                            easing: animationEasing
                        });
                } else if (currentState === 'opened') {
                    // since it wont animate if it's already animating we can set the state now
                    connectDrawer.attr('data-state', 'closed');
                    connectDrawer.animate({ right: drawerClosedRight },
                        {
                            duration: animationDuration,
                            easing: animationEasing
                        });
                }
            }
        });
    }

    function init() {
        initDrawer();
    }

    return {
        Init: init
    };
})();

$(document).ready(StorNextPDPPrimaryStorage.Init);


$(document).ready(function () {
    $.Qchat_showexempt = true;
});

//$(document).ready(function() {
//     $.Qchat_init({
//      chat_btn_id: '57339000000L00z',
//      invite_id: '57339000000L014'
//    });
//});