/// <reference types="cypress" />

describe('Login in Adquirencia', () => {
    before(() => {
        cy.visit('https://adquirencia.dev.mobilpay.com.br/')
    })

    it('Login', () => {
        cy.get('#login').type('luiz.guilherme@b2ml.com.br')
        cy.get('#senha').type('123456')
        cy.get('.login_btn').click()
    })

    it('Cadastrar Vendedor', () => {        
        cy.fixture('vendedor/vendedorTeste.json').as('vendedorCadastro').then( function (){    
            cy.get('#sidebar-left', {timeout: 60000}).should('be.visible')
            cy.get(':nth-child(8) > #amenu', {timeout: 60000}).should('be.visible')
            cy.get(':nth-child(8) > #amenu').click()
            cy.get('#vendedores').should('be.visible')
            cy.get('#vendedores').click()
            cy.get('#cadastrarnovovendedor').click()
            cy.get('[name=nome]').type(this.vendedorCadastro.nome)
            cy.get('[name=cpf]').type(this.vendedorCadastro.cpf)
            cy.get('[name=login]').type(this.vendedorCadastro.login)
            cy.get('[name=email]').type(this.vendedorCadastro.email)
            cy.get('[name=telefone]').type(this.vendedorCadastro.telefone)
            cy.get('.form-group > .ng-untouched > .ui-dropdown > .ui-dropdown-label').click()
            cy.get('.ui-dropdown-filter').type('Amaz')
            cy.get(`li[aria-label="${this.vendedorCadastro.estado}"]`).click()
            cy.get('.form-group > .ng-untouched > .ui-dropdown > .ui-dropdown-label').click()
            cy.get('.ui-dropdown-filter').type('Manau')
            cy.get(`li[aria-label="${this.vendedorCadastro.cidade}"]`).click()
            cy.get('[name=metaMensal]').type(this.vendedorCadastro.meta)
            cy.get('#salvar').click()
        })
    })
})