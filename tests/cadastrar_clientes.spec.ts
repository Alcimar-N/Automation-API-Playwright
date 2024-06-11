import { test, expect } from "@playwright/test";

let token 

test("Cadastrar cliente", async ({ request }) => {
  const responseToken = await request.post("http://127.0.0.1:1337/api/clientes/login", {
  
    data: {
      "": "",
      "": ""
    }
  
  });

  const responseJsonToken = await responseToken.json()
   token = await responseJsonToken.token


  const response = await request.post("http://127.0.0.1:1337/api/clientes/", {
  
    data: {
      Nome: "Teste da silva",
      Nascimento: "1970-03-12",
      Email: "test.sil@test.com",
      Telefone: "11940650200",
      Idade: 34,
      CPF: "2350934689",
      Altura: 1.85,
    },
  
  });
  const responseJson = await response.json()
  expect(response.status()).toBe(201);
  expect(responseJson.data.attributes).toBe('id')
  expect(responseJson.data.attributes.Nome).toBe('Teste02')
  expect(responseJson.data.attributes).toHaveProperty('Nome')

});
