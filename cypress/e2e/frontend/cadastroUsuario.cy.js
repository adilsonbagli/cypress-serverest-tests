describe('Cadastro + Login - Serverest', () => {
  it('Deve cadastrar e logar com sucesso', () => {
    const email = `adilson_${Date.now()}@teste.com`;
    const senha = '123456';

    // Cadastro
    cy.visit('/cadastrarusuarios');
    cy.get('[data-testid=nome]').type('Adilson QA');
    cy.get('[data-testid=email]').type(email);
    cy.get('input[type="password"]').type(senha); // 👈 ajuste aqui
    cy.get('[data-testid=cadastrar]').click();

    // Login
    cy.visit('/login');
    cy.get('[data-testid=email]').type(email);
    cy.get('[data-testid="password"]').type(senha); // aqui sim existe o data-testid
    cy.get('[data-testid=entrar]').click();

    cy.url().should('include', '/home');
  });
});