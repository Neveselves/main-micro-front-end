import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyElementsModule } from '@angular-extensions/elements';
import { Mf1RoutingModule } from './mf1.routing.module';
import { Mf1Component } from './components/mf1.component';

@NgModule({
  declarations: [Mf1Component],
  imports: [CommonModule, LazyElementsModule, Mf1RoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Mf1Module {}
