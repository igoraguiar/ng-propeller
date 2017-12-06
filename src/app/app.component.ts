import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    title = 'app';
    items = []

    constructor() {

    }

    ngAfterViewInit() {
        setTimeout(()=>{
            
        }, 5000)
    }

    addItem() {
        this.items.push(`Item ${this.items.length + 1}`)
    }

}
