import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOnceDirective } from 'app/utilities/event-modifiers/click-once.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClickOnceDirective],
  exports: [
    ClickOnceDirective]
})
export class UtilitiesModule { }
