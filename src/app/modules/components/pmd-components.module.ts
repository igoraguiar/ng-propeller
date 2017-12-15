import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmdAccordionEffectDirective } from './pmd-accordion-effect.directive';
import { PmdAlertDirective } from './pmd-alert.directive';
import { PmdCheckboxDirective } from './pmd-checkbox.directive';
import { PmdDropdownDirective } from './pmd-dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PmdAccordionEffectDirective, PmdAlertDirective, PmdCheckboxDirective, PmdDropdownDirective],
  exports: [PmdAccordionEffectDirective, PmdAlertDirective, PmdCheckboxDirective, PmdDropdownDirective]
})
export class PmdComponentsModule { }
