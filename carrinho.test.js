const {test, expect} = require('@jest/globals')
const RemoverQuantidadeProduto1 = require('./CarrinhoCompras')

test ('Remover retornar quantidade -1', () => {
  expect(RemoverQuantidadeProduto1(5)).toBe(4)
});