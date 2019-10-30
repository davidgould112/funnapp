import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFunnComponent } from './form-funn.component';

describe('FormFunnComponent', () => {
  let component: FormFunnComponent;
  let fixture: ComponentFixture<FormFunnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFunnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFunnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
