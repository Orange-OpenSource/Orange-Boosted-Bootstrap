import { NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil/index';

@NgModule({
  imports: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class ComponentLibraryModule {}
