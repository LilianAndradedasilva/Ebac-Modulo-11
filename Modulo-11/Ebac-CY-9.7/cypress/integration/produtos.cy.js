/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class = "product-block grid"]')
            //.first()
            //.last()
            // .eq(3)
            .contains('Aero Daily Fitness Tee')
            .click()

    });

    it.only('Deve adicionar um produto ao carrinho',() => {
        var quantidade = 5
    cy.get('[class = "product-block grid"]')
        .contains('Autumn Pullie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').click().should('contain',quantidade)
        cy.get('.woocommerce-message').should ('contain',quantidade +' × “Autumn Pullie” foram adicionados no seu carrinho.')


});
});