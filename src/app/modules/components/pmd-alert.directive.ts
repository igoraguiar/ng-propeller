import { Directive, HostListener } from '@angular/core';
import { PmdAlertService } from './pmd-alert.service';

declare var $: any;

@Directive({
    selector: '.pmd-alert-toggle,  pmd-alert'
})
export class PmdAlertDirective {

    constructor(private pmdAlertService: PmdAlertService) { }

    @HostListener('click', ['$event'])
    handleClick(e) {
        var $this = $(e.target)
        var $positionX = $this.attr("data-positionX"),
            $positionY = $this.attr("data-positionY"),
            $dataEffect = $this.attr("data-effect"),
            $dataMessage = $this.attr("data-message"),
            $dataType = $this.attr("data-type"),
            $actionText = $this.attr("data-action-text"),
            $action = $this.attr("data-action"),
            $duration = $this.attr("data-duration") || 3000;

        this.pmdAlertService.showAlert($positionX, $positionY, $dataEffect, $dataMessage, $dataType, $actionText, $action, $duration);
    }

}
