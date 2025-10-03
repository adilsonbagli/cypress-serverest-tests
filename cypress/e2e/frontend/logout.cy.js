describe('Logout - Serverest', () => {
  it('Deve cadastrar, logar e realizar o logout com sucesso', () => {
    const email = `adilson_${Date.now()}@teste.com`;
    const senha = '123456';

    // 1) Cadastro
    cy.visit('/cadastrarusuarios');
    cy.get('[data-testid=nome]').type('Adilson QA');
    cy.get('[data-testid=email]').type(email);
    cy.get('input[type="password"]').type(senha);
    cy.get('[data-testid=cadastrar]').click();

    // aguarda o cadastro ser concluído antes de logar
    cy.contains('Cadastro realizado com sucesso').should('be.visible');

    // 2) Login
    cy.visit('/login');
    cy.get('[data-testid=email]').type(email);
    cy.get('[data-testid=senha]').type(senha);
    cy.get('[data-testid=entrar]').click();

    // 3) Garantir que foi para home
    cy.url().should('include', '/home');

    // 4) Logout
    cy.get('[data-testid="logout"]').click();

    // 5) Validação: voltou para login
    cy.url().should('include', '/login');
    cy.contains('Login').should('be.visible');
  });
});
