/*jslint browser: true */
/*global $, jQuery */

(function ($) {
    "use strict";

    var SCROLL_THRESHOLD = 100;
    var AFFIX_OFFSET = {top: 100};
    var ANIMATION_SPEED = "slow";
    var SCROLL_TOP = 0;

    function initBackToTop() {
        var WINDOW_HEIGHT = $(window).height();
        var DOCUMENT_HEIGHT = $(document).height();
        var TOP_LINK_BLOCK = $("#top-link-block");
        var BACK_TO_TOP_BTN = $("#backToTopBtn");

        if ((WINDOW_HEIGHT + SCROLL_THRESHOLD) < DOCUMENT_HEIGHT) {
            TOP_LINK_BLOCK.removeClass("hidden").affix({
                offset: AFFIX_OFFSET
            });
        }

        BACK_TO_TOP_BTN.on("click", function () {
            $("html, body").animate({scrollTop: SCROLL_TOP}, ANIMATION_SPEED);
            return false;
        });
    }

    $(document).ready(initBackToTop);

}(jQuery));
/*
https://stackoverflow.com/questions/22413203/bootstrap-affix-back-to-top-link
*/
