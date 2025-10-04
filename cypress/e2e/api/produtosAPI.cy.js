describe('API Produtos - ServeRest', () => {
  let token;

  before(() => {
    // Cria usuário admin e pega o token de autenticação
    const email = `admin_${Date.now()}@teste.com`;

    // Cria usuário administrador
    cy.request('POST', `${Cypress.env('apiUrl')}/usuarios`, {
      nome: 'Admin Teste',
      email,
      password: '123456',
      administrador: 'true'
    }).then(() => {
      // Faz login com o usuário criado
      cy.request('POST', `${Cypress.env('apiUrl')}/login`, {
        email,
        password: '123456'
      }).then((res) => {
        token = res.body.authorization;
        expect(token).to.not.be.empty;
      });
    });
  });

  it('✅ Deve cadastrar produto com sucesso', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/produtos`,
      headers: { Authorization: token },
      body: {
        nome: `Produto QA ${Date.now()}`,
        preco: 50,
        descricao: 'Produto de teste',
        quantidade: 10
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });

  it('❌ Não deve cadastrar produto sem nome', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/produtos`,
      headers: { Authorization: token },
      failOnStatusCode: false, // evita que o teste quebre no 400
      body: {
        preco: 50,
        descricao: 'Produto sem nome',
        quantidade: 5
      }
    }).then((res) => {
      expect(res.status).to.eq(400);
      expect(res.body.nome).to.eq('nome é obrigatório');
    });
  });

  it('📋 Deve listar produtos cadastrados', () => {
    cy.request('GET', `${Cypress.env('apiUrl')}/produtos`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.produtos).to.be.an('array');
    });
  });
});
