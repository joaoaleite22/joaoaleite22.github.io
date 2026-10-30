const { somar, subtrair, multiplicar, dividir } = require('./calculadora');

describe('Operações matemáticas', () => {
  test('deve somar corretamente', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('deve subtrair corretamente', () => {
    expect(subtrair(10, 4)).toBe(6);
  });

  test('deve multiplicar corretamente', () => {
    expect(multiplicar(4, 5)).toBe(20);
  });

  test('deve dividir corretamente', () => {
    expect(dividir(20, 4)).toBe(5);
  });

  test('deve lançar erro ao dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não é permitida.');
  });
});
