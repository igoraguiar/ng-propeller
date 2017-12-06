import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmdRippleEffectDirective } from './pmd-ripple-effect.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [PmdRippleEffectDirective],
    exports: [PmdRippleEffectDirective]
})
export class PmdEffectsModule { }
