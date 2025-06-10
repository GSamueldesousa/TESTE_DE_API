// src/tests/integration/api.test.js
const { test, expect } = require('@playwright/test');

test('Testar endpoint de usuários', async () => {
  console.log("🧪 Iniciando teste: Endpoint de Usuários");

  const endpoints = {
    users: 'https://jsonplaceholder.typicode.com/users' 
  };

  console.log(`🔗 URL do endpoint: ${endpoints.users}`);

  const response = await fetch(endpoints.users);
  const data = await response.json();

  // Validações
  expect(response.status).toBe(200);
  expect(data.length).toBeGreaterThan(0);

  // Valida propriedades do primeiro usuário
  const firstUser = data[0];
  expect(firstUser).toHaveProperty('id');
  expect(firstUser).toHaveProperty('name');
  expect(firstUser).toHaveProperty('email');

  console.log("✅ Teste finalizado com sucesso!");
});