import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsGradientComponent } from './buttons-gradient.component';

describe('ButtonsGradientComponent', () => {
  let component: ButtonsGradientComponent;
  let fixture: ComponentFixture<ButtonsGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
