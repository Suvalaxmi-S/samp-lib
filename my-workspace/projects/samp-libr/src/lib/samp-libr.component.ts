import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'lib-samp-libr',
  template: `
    <form #nameAgeForm="ngForm" (ngSubmit)="onSubmitNameAgeForm()">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" ngModel required />
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" name="age" ngModel required min="1" />
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        [disabled]="!nameAgeForm.valid"
      >
        Submit
      </button>
    </form>
  `,
  styles: [],
})
export class SampLibrComponent {
  @ViewChild('nameAgeForm') values: NgForm | undefined;

  onSubmitNameAgeForm() {
    console.log(this.values);
  }
}
