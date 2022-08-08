import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDialogboxComponent } from './success-dialogbox.component';

describe('SuccessDialogboxComponent', () => {
  let component: SuccessDialogboxComponent;
  let fixture: ComponentFixture<SuccessDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessDialogboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
