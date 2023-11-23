import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampLibrComponent } from './samp-libr.component';

describe('SampLibrComponent', () => {
  let component: SampLibrComponent;
  let fixture: ComponentFixture<SampLibrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampLibrComponent]
    });
    fixture = TestBed.createComponent(SampLibrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
