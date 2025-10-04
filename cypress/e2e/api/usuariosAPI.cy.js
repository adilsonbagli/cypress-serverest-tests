describe('API Usuários - Serverest', () => {
  it('Deve listar usuários com sucesso', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}/usuarios`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('usuarios');
    });
  });

  it('Deve criar um novo usuário', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/usuarios`,
      body: {
        nome: "Adilson QA",
        email: `adilson_${Date.now()}@teste.com`,
        password: "123456",
        administrador: "true"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
    });
  });
});
