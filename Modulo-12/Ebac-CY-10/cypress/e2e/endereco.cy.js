/// <reference types = "cypress" />

//Importando aqui o arquivo endereco.page.js
//import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.log('aluno_ebac@teste.com', 'teste@teste.com')
        });
    
    it ('Deve fazer cadastro de faturamento com sucesso', () => {
        
        //cadastro de endereço
        //EnderecoPage.editarEnderecoFaturamento()
    });
});