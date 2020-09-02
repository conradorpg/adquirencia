/// <reference types="cypress" />

describe('Validar CNPJ e Status', () => {
    check() {
        cy.fixture('ecPJ/stressTest/exTestePJ13.json').as('ecCadastro').then( function () {
            cy.get('#Nome').type(this.ecCadastro.razaoSocial)
            cy.get('.col-md-offset-9 > .btn').click()
            cy.get('#ui-tabpanel-3-label').click()
            cy.get('#ui-tabpanel-3 > .table-layout > .ui-table > .ui-table-wrapper > table > .ui-table-tbody > tr.ng-star-inserted > :nth-child(2)').should('contain', this.ecCadastro.cnpj)
            cy.get('#ui-tabpanel-3 > .table-layout > .ui-table > .ui-table-wrapper > table > .ui-table-tbody > :nth-child(1) > :nth-child(4)').should('contain', 'Ativo')            
    })
}
})