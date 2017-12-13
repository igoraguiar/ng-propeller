import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmdRippleEffectDirective } from './pmd-ripple-effect.directive';
import { PmdXtraShakeEffectDirective } from './pmd-xtra-shake-effect.directive';
import { PmdCollapseEffectDirective } from './pmd-collapse-effect.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [PmdRippleEffectDirective, PmdXtraShakeEffectDirective, PmdCollapseEffectDirective],
    exports: [PmdRippleEffectDirective, PmdXtraShakeEffectDirective, PmdCollapseEffectDirective]
})
export class PmdEffectsModule { }
