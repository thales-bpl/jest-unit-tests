const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const productResults = productDetails('álcool', 'máscara'); 
    const result0 = productResults[0];
    const result1 = productResults[1];
    // Teste que o retorno da função é um array.
    // Referência (Array.isArray): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    assert.strictEqual(Array.isArray(productResults), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productResults.length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof result0 && typeof result1, 'object');

    // Teste que os dois objetos são diferentes entre si.
    const isDiff = result0 !== result1;
    assert.strictEqual(isDiff, true);

    // Teste que os dois productIds terminam com 123.
    // Referência (substring): https://www.techiedelight.com/get-last-n-characters-from-string-javascript/ 
    // Referência (substring): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
    const checkId123A = result0.details.productId.substring(result0.details.productId.length - 3);
    const checkId123B = result1.details.productId.substring(result1.details.productId.length - 3);
    assert.strictEqual(checkId123A, '123');
    assert.strictEqual(checkId123B, '123');
  });
});
