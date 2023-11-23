import { NgModule } from '@angular/core';
import { SampLibrComponent } from './samp-libr.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SampLibrComponent],
  imports: [FormsModule],
  exports: [SampLibrComponent],
})
export class SampLibrModule {}
