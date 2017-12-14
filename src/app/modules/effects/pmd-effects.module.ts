import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmdRippleEffectDirective } from './pmd-ripple-effect.directive';
import { PmdXtraShakeEffectDirective } from './pmd-xtra-shake-effect.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [PmdRippleEffectDirective, PmdXtraShakeEffectDirective],
    exports: [PmdRippleEffectDirective, PmdXtraShakeEffectDirective]
})
export class PmdEffectsModule { }
