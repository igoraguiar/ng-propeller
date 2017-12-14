import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmdAccordionEffectDirective } from './pmd-accordion-effect.directive';
import { PmdAlertDirective } from './pmd-alert.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PmdAccordionEffectDirective, PmdAlertDirective],
  exports: [PmdAccordionEffectDirective, PmdAlertDirective]
})
export class PmdComponentsModule { }
