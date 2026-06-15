/*jslint browser: true */
/*global $, jQuery */

(function ($) {
    "use strict";

    var SCROLL_THRESHOLD = 100;
    var AFFIX_OFFSET = {top: 100};
    var ANIMATION_SPEED = "slow";
    var SCROLL_TOP = 0;

    function initBackToTop() {
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        var topLinkBlock = $("#top-link-block");
        var backToTopBtn = $("#backToTopBtn");

        if ((windowHeight + SCROLL_THRESHOLD) < documentHeight) {
            topLinkBlock.removeClass("hidden").affix({
                offset: AFFIX_OFFSET
            });
        }

        backToTopBtn.on("click", function () {
            $("html, body").animate({scrollTop: SCROLL_TOP}, ANIMATION_SPEED);
            return false;
        });
    }

    $(document).ready(initBackToTop);

}(jQuery));
/*thanks: https://stackoverflow.com/questions/22413203/bootstrap-affix-back-to-top-link */
