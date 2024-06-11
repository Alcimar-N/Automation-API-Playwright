import { test, expect } from '@playwright/test';


test('Buscar todos os clientes', async ({ request }) => {
  
  const resposnse = await request.get('http://127.0.0.1:1337/api/clientes/')
  expect(resposnse.status()).toBe(200)
  
});

test.only('Buscar cliente por ID', async ({ request }) => {
  
  const response = await request.get('http://127.0.0.1:1337/api/clientes/2')
  const responseJson = await response.json()
  console.log(responseJson)
  expect(response.status()).toBe(200)
  expect(responseJson.data.id).toBe(2)
  expect(responseJson.data.attributes.Nome).toBe('Teste02')
  expect(responseJson.data.attributes).toHaveProperty('Nome')

  
});


