import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculadoraComponent, CalculadoraService } from './calculadora';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalculadoraComponent
      ],
      providers: [
        CalculadoraService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
