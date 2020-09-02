/// <reference types="cypress" />

describe('Login in Adquirencia', () => {
    before(() => {
        cy.visit('https://adquirencia.mobilpay.com.br/')
    })

    it('Login', () => {
        cy.get('#login').type('luiz.guilherme@b2ml.com.br')
        cy.get('#senha').type('123456')
        cy.get('.login_btn').click()
    })
})