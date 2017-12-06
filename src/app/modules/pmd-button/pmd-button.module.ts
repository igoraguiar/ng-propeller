import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmdButtonComponent } from './pmd-button.component';
import { PmdEffectsModule } from '../effects/pmd-effects.module';

@NgModule({
    imports: [
        CommonModule,
        PmdEffectsModule
    ],
    declarations: [PmdButtonComponent],
    exports: [PmdButtonComponent]
})
export class PmdButtonModule {

}
