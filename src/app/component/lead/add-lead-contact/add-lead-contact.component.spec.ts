import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeadContactComponent } from './add-lead-contact.component';

describe('AddLeadContactComponent', () => {
  let component: AddLeadContactComponent;
  let fixture: ComponentFixture<AddLeadContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeadContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeadContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
