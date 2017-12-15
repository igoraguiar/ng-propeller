import { Directive, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import * as $ from 'jquery';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
    selector: '.pmd-dropdown'
})
export class PmdDropdownDirective implements AfterContentInit {

    constructor(private el: ElementRef, private ngZone: NgZone) { }

    ngAfterContentInit() {
        const nativeEl = this.el.nativeElement;

        this.ngZone.run(()=>  {

            const dropdown = $(nativeEl);
            
            const dropdownMenu = dropdown.children('.dropdown-menu');
            dropdownMenu.wrap("<div class='pmd-dropdown-menu-container'></div>");
            dropdownMenu.before('<div class="pmd-dropdown-menu-bg"></div>');
            PmdDropdownDirective.pmdsidebardropdown(nativeEl);
            if (!window['pmdsidebardropdown']) {
                window['pmdsidebardropdown'] = true;
                $(window).resize(function () {
                    this.pmdsidebardropdown($('.pmd-dropdown'));
                });
            }
            console.log(jQuery.data(nativeEl))

        });
        console.log(jQuery.data(nativeEl))
        window['nativeEl'] = nativeEl;
    }

    static pmdsidebardropdown(nativeEl) {
        console.log('pmdsidebardropdown', nativeEl)
        if ($(window).width() < 767) {
            var w = $(nativeEl).find('.dropdown-menu').outerWidth();
            var h = $(nativeEl).find('.dropdown-menu').outerHeight();
            $(nativeEl).find('.dropdown-menu-right').css("clip", "rect(0 " + w + "px 0 " + w + "px)");
            $(nativeEl).find('.pmd-dropdown-menu-top-left').css("clip", "rect(" + h + "px 0 " + h + "px 0)");
            $(nativeEl).find('.pmd-dropdown-menu-top-right').css("clip", "rect(" + h + "px " + w + "px " + h + "px " + w + "px)");
            // Add slidedown animation to dropdown
            $(nativeEl).off('show.bs.dropdown');
            $(nativeEl).on('show.bs.dropdown', function () {
                const $this = $(this);
                var that = $this.find('.dropdown-menu');
                var w = that.outerWidth();
                var h = that.outerHeight();
                var dcdmc = that.closest('.pmd-dropdown-menu-container');
                var dcdmbg = dcdmc.find('.pmd-dropdown-menu-bg');
                var $dataSidebar = $this.find('.dropdown-toggle').attr("data-sidebar");
                var dropdowncenter = that.hasClass('pmd-dropdown-menu-center');
                if ($dataSidebar == 'true') {
                    that.first().stop(true, true).slideDown(300);
                    $this.addClass('pmd-sidebar-dropdown');
                } else if (dropdowncenter) {
                    $('.dropdown-menu').removeAttr('style');
                    that.first().stop(true, true).slideDown(300);
                } else {
                    dcdmc.css({ 'width': w + 'px', 'height': h + 'px' });
                    dcdmbg.css({ 'width': w + 'px', 'height': h + 'px' });
                    if (that.hasClass('dropdown-menu-right')) {
                        setTimeout(function () {
                            that.css("clip", "rect(0 " + w + "px " + h + "px 0)");
                        }, 10);
                        dcdmbg.addClass('pmd-dropdown-menu-bg-right');
                        dcdmc.css({ "right": "0", "left": "auto" })
                    } else if (that.hasClass('pmd-dropdown-menu-top-left')) {
                        setTimeout(function () {
                            that.css("clip", "rect(0 " + w + "px " + h + "px 0)");
                        }, 10);
                        dcdmbg.addClass('pmd-dropdown-menu-bg-bottom-left');
                    } else if (that.hasClass('pmd-dropdown-menu-top-right')) {
                        setTimeout(function () {
                            that.css("clip", "rect(0 " + w + "px " + h + "px 0)");
                        }, 10);
                        dcdmbg.addClass('pmd-dropdown-menu-bg-bottom-right');
                        dcdmc.css({ "right": "0", "left": "auto" })
                    } else {
                        setTimeout(function () {
                            that.css("clip", "rect(0 " + w + "px " + h + "px 0)");
                        }, 10);
                    }
                }
            });
            // Add slideup animation to dropdown
            $(nativeEl).off('hide.bs.dropdown');
            $(nativeEl).on('hide.bs.dropdown', function () {
                const $this = $(this);
                var $dataSidebar = $this.find('.dropdown-toggle').attr("data-sidebar");
                var dropdowncenter = $this.find('.dropdown-menu').hasClass('pmd-dropdown-menu-center');
                var that = $this.find('.dropdown-menu');
                var w = that.outerWidth();
                var h = that.outerHeight();
                var dcdmc = that.closest('.pmd-dropdown-menu-container');
                var dcdmbg = dcdmc.find('.pmd-dropdown-menu-bg');
                if ($dataSidebar == 'true') {
                    that.first().stop(true, true).slideUp(300);
                } else if (dropdowncenter) {
                    $('.dropdown-menu').removeAttr('style');
                    that.first().stop(true, true).slideUp(300);
                } else {
                    that.css("clip", "rect(0 0 0 0)");
                    dcdmc.removeAttr('style');
                    dcdmbg.removeAttr('style');
                    if (that.hasClass('dropdown-menu-right')) {
                        that.css("clip", "rect(0 " + w + "px 0 " + w + "px)");
                    } else if (that.hasClass('pmd-dropdown-menu-top-left')) {
                        that.css("clip", "rect(" + h + "px 0 " + h + "px 0)");
                    } else if (that.hasClass('pmd-dropdown-menu-top-right')) {
                        that.css("clip", "rect(" + h + "px " + w + "px " + h + "px " + w + "px)");
                    }
                }
            });
        } else {
            // Add slidedown animation to dropdown
            $('.dropdown-menu').removeAttr('style');
            var we = $(nativeEl).find('.dropdown-menu').outerWidth();
            var he = $(nativeEl).find('.dropdown-menu').outerHeight();
            $(nativeEl).find('.dropdown-menu-right').css("clip", "rect(0 " + we + "px 0 " + we + "px)");
            $(nativeEl).find('.pmd-dropdown-menu-top-left').css("clip", "rect(" + he + "px 0 " + he + "px 0)");
            $(nativeEl).find('.pmd-dropdown-menu-top-right').css("clip", "rect(" + he + "px " + we + "px " + he + "px " + we + "px)");

            $(nativeEl).off('show.bs.dropdown');
            $(nativeEl).on('show.bs.dropdown', function () {
                const $this = $(this);
                var hassidebar = $this.closest('.pmd-sidebar').hasClass('pmd-sidebar');
                var dropdowncenter = $this.find('.dropdown-menu').hasClass('pmd-dropdown-menu-center');
                var that = $this.find('.dropdown-menu');
                var w = that.outerWidth();
                var h = that.outerHeight();
                var dcdmc = that.closest('.pmd-dropdown-menu-container');
                var dcdmbg = dcdmc.find('.pmd-dropdown-menu-bg');
                if (hassidebar) {
                    that.first().stop(true, true).slideDown();
                } else if (dropdowncenter) {
                    if (!$this.parents().hasClass("pmd-sidebar")) {
                        $('.dropdown-menu').removeAttr('style');
                    }
                    that.first().stop(true, true).slideDown();
                } else {
                    dcdmc.css({ 'width': w + 'px', 'height': h + 'px' });
                    dcdmbg.css({ 'width': w + 'px', 'height': h + 'px' });
                    if (that.hasClass('dropdown-menu-right')) {
                        setTimeout(function () {
                            that.css("clip", "rect(0 " + w + "px " + h + "px 0)");
                        }, 10);
                        dcdmbg.addClass('pmd-dropdown-menu-bg-right');
                        dcdmc.css({ "right": "0", "left": "auto" })
                    } else if (that.hasClass('pmd-dropdown-menu-top-left')) {
                        setTimeout(function () {
                            that.css("clip", "rect(0 " + w + "px " + h + "px 0)");
                        }, 10);
                        dcdmbg.addClass('pmd-dropdown-menu-bg-bottom-left');
                    } else if (that.hasClass('pmd-dropdown-menu-top-right')) {
                        setTimeout(function () {
                            that.css("clip", "rect(0 " + w + "px " + h + "px 0)");
                        }, 10);
                        dcdmbg.addClass('pmd-dropdown-menu-bg-bottom-right');
                        dcdmc.css({ "right": "0", "left": "auto" })
                    } else {
                        setTimeout(function () {
                            that.css("clip", "rect(0 " + w + "px " + h + "px 0)");
                        }, 10);
                    }
                }
                this.closable = false;
            });
            $(nativeEl).on('click', function () {
                const $this = $(this);
                var hassidebar = $this.closest('.pmd-sidebar').hasClass('pmd-sidebar');
                if (hassidebar && !$this.hasClass("open")) {
                    $(nativeEl).removeClass("open");
                    $('.dropdown-menu').slideUp(300);
                } else if ($this.parents("aside").hasClass("pmd-sidebar")) {
                    $('.dropdown-menu').slideUp(300);
                }

                this.closable = true;
            });
            // Add slideup animation to dropdown
            $(nativeEl).off('hide.bs.dropdown');
            $(nativeEl).on('hide.bs.dropdown', function () {
                const $this = $(this);
                if ($this.parents("aside").hasClass("pmd-sidebar")) {
                    return this.closable;
                }
                else {
                    var hassidebar = $this.closest('.pmd-sidebar').hasClass('pmd-sidebar');
                    var dropdowncenter = $this.find('.dropdown-menu').hasClass('pmd-dropdown-menu-center');
                    var that = $this.find('.dropdown-menu');
                    var w = that.outerWidth();
                    var h = that.outerHeight();
                    var dcdmc = that.closest('.pmd-dropdown-menu-container');
                    var dcdmbg = dcdmc.find('.pmd-dropdown-menu-bg');
                    if (hassidebar) {
                        that.first().stop(true, true).slideUp(300);
                    }
                    else if (dropdowncenter) {
                        if (!$this.parents().hasClass("pmd-sidebar")) {
                            $('.dropdown-menu').removeAttr('style');
                        }
                        that.first().stop(true, true).slideUp(300);
                    } else {
                        that.css("clip", "rect(0 0 0 0)");
                        dcdmc.removeAttr('style');
                        dcdmbg.removeAttr('style');
                        if (that.hasClass('dropdown-menu-right')) {
                            that.css("clip", "rect(0 " + w + "px 0 " + w + "px)");
                        } else if (that.hasClass('pmd-dropdown-menu-top-left')) {
                            that.css("clip", "rect(" + h + "px 0 " + h + "px 0)");
                        } else if (that.hasClass('pmd-dropdown-menu-top-right')) {
                            that.css("clip", "rect(" + h + "px " + w + "px " + h + "px " + w + "px)");
                        }
                    }
                }
            });
        }
    }
}
