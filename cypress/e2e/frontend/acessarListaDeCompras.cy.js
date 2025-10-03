describe('Acessar Lista de Compras - Serverest', () => {
  it('Deve cadastrar, logar e acessar a página de Lista de Compras', () => {
    const email = `adilson_${Date.now()}@teste.com`;
    const senha = '123456';

    // 1) Cadastro
    cy.visit('/cadastrarusuarios');
    cy.get('[data-testid=nome]').type('Adilson QA');
    cy.get('[data-testid=email]').type(email);
    cy.get('input[type="password"]').type(senha);
    cy.get('[data-testid=cadastrar]').click();

    // 2) Garante que foi redirecionado para home
    cy.url({ timeout: 10000 }).should('include', '/home');
    cy.get('[data-testid="lista-de-compras"]').should('be.visible');

    // 3) Acessar Lista de Compras
    cy.get('[data-testid="lista-de-compras"]').click();

    // 4) Validações
    cy.url().should('include', '/minhaListaDeProdutos');
    cy.contains('Lista de Compras').should('be.visible');
    cy.contains('Seu carrinho está vazio').should('be.visible');
  });
});
