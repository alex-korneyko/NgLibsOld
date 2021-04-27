import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonColorsComponent } from './button-colors.component';

describe('ButtonColorsComponent', () => {
  let component: ButtonColorsComponent;
  let fixture: ComponentFixture<ButtonColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
