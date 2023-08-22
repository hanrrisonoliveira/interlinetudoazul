describe('Acessar o site', function(){
  it('Deve verificar se o Interline Tudo Azul está no ar', function(){
    cy.visit('/')
    cy.get('#menu-comprar-passagens').contains('Comprar Passagens')
  })
})