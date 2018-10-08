/**
 * @author Bruno A. de Pádua<solucaoelogica@gmail.com>
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
/**
 * Tutorial udemy 7 projetos em angular.
 * 
 * @param num1 number
 * @param num2 number
 * @param operacao string operacao a ser executada
 * @return number resultado da operacao
 */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;
    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
