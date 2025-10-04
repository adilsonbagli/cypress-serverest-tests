describe('API Login - ServeRest', () => {
  let email;

  before(() => {
    // cria usuário admin e guarda o email
    email = `user_${Date.now()}@teste.com`;

    cy.request('POST', `${Cypress.env('apiUrl')}/usuarios`, {
      nome: "User Teste",
      email,
      password: "123456",
      administrador: "true"
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });

  it('Deve logar com sucesso', () => {
    cy.request('POST', `${Cypress.env('apiUrl')}/login`, {
      email,
      password: "123456"
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('authorization');
    });
  });
});
