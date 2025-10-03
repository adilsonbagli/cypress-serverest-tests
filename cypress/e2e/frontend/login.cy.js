describe('Cadastro de Usuário - Serverest', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.visit('/cadastrarusuarios');
    cy.get('[data-testid=nome]').type('Usuário QA');
    cy.get('[data-testid=email]').type(`qa_${Date.now()}@teste.com`);
    cy.get('input[type="password"]').type('123456');
    cy.get('[data-testid=cadastrar]').click();

    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });
});

