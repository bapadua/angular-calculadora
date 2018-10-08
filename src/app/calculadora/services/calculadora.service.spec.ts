import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }));

  it('deve garantir que 5 - 3 = 2'),
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(5, 3, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(2);
    });

  it('deve garantir que 6 / 2 = 3'), inject([CalculadoraService],
    (service: CalculadoraService) => {
      let div = service.calcular(6, 2, CalculadoraService.DIVISAO);
      expect(div).toEqual(3);
    });

  it('deve garantir que 5 * 2 = 10'), inject([CalculadoraService],
    (service:CalculadoraService) =>{
      let mult = service.calcular(5, 2, CalculadoraService.MULTIPLICACAO);
      expect(mult).toEqual(10);
    });
  
});
