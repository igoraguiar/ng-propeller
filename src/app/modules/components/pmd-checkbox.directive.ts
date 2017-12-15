import { Directive, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery';
@Directive({
    selector: '.pmd-checkbox, .pmd-checkbox-ripple-effect'
})
export class PmdCheckboxDirective implements AfterViewInit {

    constructor(private el: ElementRef) {

    }

    ngAfterViewInit(): void {
        if (this.el.nativeElement.classList.contains('pmd-checkbox')) {
            const $el = $(this.el.nativeElement);
            const $input = $el.children('input');
            $input.after('<span class="pmd-checkbox-label">&nbsp;</span>');
        }
    }

    @HostListener('mousedown', ['$event'])
    @HostListener('touchstart', ['$event'])
    handleMouseDown(e) {
        if (this.el.nativeElement.classList.contains('pmd-checkbox-ripple-effect')) {
            this.runEffect(e)
        }
    }

    runEffect(e) {
        var rippler = $(e.target);
        $('.ink').remove();
        // create .ink element if it doesn't exist
        if (rippler.find(".ink").length === 0) {
            rippler.append('<span class="ink"></span>');
        }
        var ink = rippler.find(".ink");
        // prevent quick double clicks
        ink.removeClass("animate");
        // set .ink diametr
        if (!ink.height() && !ink.width()) {
            //	var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({ height: 20, width: 20 });
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