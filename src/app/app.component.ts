import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { PmdAlertService } from './modules/components/pmd-alert.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    title = 'app';
    items = []
    components = {
        accordion: false,
        dropdown: false,
        checkbox: false,
        alert: false
    }

    constructor(private pmdAlertService: PmdAlertService) {

    }

    ngAfterViewInit() {
        setTimeout(()=>{
            
        }, 5000)
    }

    addItem() {
        this.items.push(`Item_${this.items.length + 1}`)
    }

    showAlert() {
        this.pmdAlertService.showAlert('center', 'bottom', 'fadeInDown', 'Teste', 'success', 'Close', true)
    }
}
