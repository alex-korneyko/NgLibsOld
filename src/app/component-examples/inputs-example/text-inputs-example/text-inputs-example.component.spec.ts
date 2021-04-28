import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputsExampleComponent } from './text-inputs-example.component';

describe('TextInputsExampleComponent', () => {
  let component: TextInputsExampleComponent;
  let fixture: ComponentFixture<TextInputsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
