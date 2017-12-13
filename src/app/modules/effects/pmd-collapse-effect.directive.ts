import { Directive, HostListener } from '@angular/core';

declare var $: any

@Directive({
    selector: 'a[data-toggle="collapse"]'
})
export class PmdCollapseEffectDirective {

    constructor() { }

    @HostListener('click', ['$event'])
    handle(e) {
        var $this = $(e.target);
        var objectID = $this.attr('href');
        var expandale = $this.attr('data-expandable');
        if (expandale == 'true') {
            if ($(objectID).hasClass('in')) {
                $(objectID).collapse('hide');
            }
            else {
                $(objectID).collapse('show');
            }
        }
        var $expandable = $this.attr("data-expandable"),
            $expanded = $this.attr("aria-expanded"),
            $current = $this.parent().parent().parent().parent().attr("id");
        if ($expandable == "false") {
            if ($expanded == "true") {
                //alert("not exp closed")
                $("#" + $current + " .active").removeClass("active");
            }
            else {
                //alert("not exp open")
                $("#" + $current + " .active").removeClass("active");
                $this.parents('.panel').addClass("active");
            }
        }
        if ($expandable == "true") {
            if ($expanded == "true") {
                $this.parents('.panel').addClass("active");
            }
            else {
                $this.parents('.panel').removeClass("active");
            }
        }
    }

}
