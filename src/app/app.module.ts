import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PmdButtonModule } from './modules/pmd-button/pmd-button.module';
import { PmdEffectsModule } from './modules/effects/pmd-effects.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PmdButtonModule,
        PmdEffectsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
