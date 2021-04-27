import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutlineColorsComponent } from './button-outline-colors.component';

describe('ButtonOutlineColorsComponent', () => {
  let component: ButtonOutlineColorsComponent;
  let fixture: ComponentFixture<ButtonOutlineColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonOutlineColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOutlineColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
