
(function ($) {
    $.Qchat_btn_id = '';
    $.Qchat_invite_id = '';
    $.Qchat_showexempt = false;

    $.Qchat_init = function (options) {
        var defaults = {
            host: 'https://d.la1-c2-dfw.salesforceliveagent.com/chat',
            init_id_1: '57239000000Cbgp',
            init_id_2: '00D00000000hb8X',
            chat_btn_id: '57339000000TORW',
            invite_id: '57339000000TORb'


            //host: 'https://d.la1-c2-dfw.salesforceliveagent.com/chat',
            //init_id_1: '57239000000Cbgp',
            //init_id_2: '00D00000000hb8X', 
            //chat_btn_id: '57339000000L00z',
            //invite_id: '57339000000L014'

            //host: 'https://d.la1-c1cs-ord.salesforceliveagent.com/chat',
            //init_id_1: '557239000000Cbgp',
            //init_id_2: '00D0q0000000o0c',
            //chat_btn_id: '57339000000L00z',
            //invite_id: '57339000000L014'

        };


        var target = $.extend(defaults, options);

        $.Qchat_btn_id = target.chat_btn_id;
        $.Qchat_invite_id = target.invite_id;

        if ($.Qchat_showexempt) {
            $('div#liveagent_invite_button_' + target.invite_id).css('visibility', 'hidden');
        }

        if (!window._laq) { window._laq = []; }

        if (liveagent) {
            liveagent.init(target.host, target.init_id_1, target.init_id_2);

            window._laq.push(function () {
                $('a[onclick*="$.Qchat_OpenChat()"]').each(function () {
                    liveagent.showWhenOnline(target.chat_btn_id, this);
                });
                $('a[href*="$.Qchat_OpenChat()"]').each(function () {
                    liveagent.showWhenOnline(target.chat_btn_id, this);
                });
            });
        }
    };

    $.Qchat_IsQueueAvailable = function () {
        var available = false;
        if ($.Qchat_showexempt === false) {
            available = true;
        }

        return available;
    };

    $.Qchat_OpenChat = function () {
        liveagent.startChat($.Qchat_btn_id);
    };

    $.Qchat_OpenInviteChat = function () {
        liveagent.startChat($.Qchat_invite_id);
    };

    $.Qchat_RejectInviteChat = function () {
        liveagent.rejectChat($.Qchat_invite_id);
    };
})(jQuery);
