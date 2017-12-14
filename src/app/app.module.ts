import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PmdEffectsModule } from './modules/effects/pmd-effects.module';
import { PmdComponentsModule } from './modules/components/pmd-components.module';
import { PmdAlertService } from './modules/components/pmd-alert.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PmdEffectsModule,
        PmdComponentsModule
    ],
    providers: [PmdAlertService],
    bootstrap: [AppComponent]
})
export class AppModule { }
