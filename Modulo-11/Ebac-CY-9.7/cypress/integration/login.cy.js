///<reference types="cypress" />

context('Funcionalidade Login', () => {
before(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});
afterEach(() => {
    cy.screenshot()
});
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()


        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno')
    })

    it ('Deve exibir mensagem de erro ao inserir usuario inválidos', () => {
        cy.get('#username').type('1aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com1')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    })
    it ('Deve exibir mensagem de erro ao inserir senha inválidos', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com1')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    })
})
