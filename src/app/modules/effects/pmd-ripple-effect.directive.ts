import { Directive, HostListener } from '@angular/core';

declare var $: any

@Directive({
    selector: '.pmd-ripple-effect'
})
export class PmdRippleEffectDirective {

    constructor() { }

    @HostListener('mousedown', ['$event'])
    @HostListener('touchstart', ['$event'])
    handleMouseDown(e) {
        this.runEffect(e)
    }
    
    runEffect(e) {
        var rippler = $(e.target);
        $('.ink').remove();
        // create .ink element if it doesn't exist
        if (rippler.find(".ink").length === 0) {
            rippler.append("<span class='ink'></span>");
        }
        var ink = rippler.find(".ink");
        // prevent quick double clicks
        ink.removeClass("animate");
        // set .ink diametr
        if (!ink.height() && !ink.width()) {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({ height: d, width: d });
        }
        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width() / 2;
        var y = e.pageY - rippler.offset().top - ink.height() / 2;
        // set .ink position and add class .animate
        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");

        setTimeout(function () {
            ink.remove();
        }, 1500);
    }
}