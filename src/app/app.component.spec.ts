import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StringCalculationService } from './services/string-calculation.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: StringCalculationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(StringCalculationService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
     fixture = TestBed.createComponent(AppComponent);
     component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });



  it('should call the service and display the result for valid input', () => {
    component.inputString = '1,2,3';
    component.calculate();
    expect(component.result).toEqual(6);
    expect(component.errorMessage).toBe('');
  });

  it('should handle and display an error for negative numbers', () => {
    component.inputString = '1,-2,3';
    component.calculate();
    expect(component.result).toBeNull();
    expect(component.errorMessage).toBe('Negative numbers not allowed: -2');
  });

});
