export class AtivarECPJ {
    visit() {
        cy.visit('https://adquirencia.dev.mobilpay.com.br/')
    }

    login() {
        cy.get('#login').type('luiz.guilherme@b2ml.com.br')
        cy.get('#senha').type('123456')
        cy.get('.login_btn').click()
    }

    ativar() {
        cy.fixture('ecPJ/stressTest/ecTestePJ20.json').as('ecCadastro').then( function () {    
            cy.get('#sidebar-left', {timeout: 60000}).should('be.visible')
            cy.get(':nth-child(8) > #amenu', {timeout: 60000}).should('be.visible')
            cy.get(':nth-child(8) > #amenu').click()
            cy.get('#clientes').should('be.visible')
            cy.get('#clientes').click()
            cy.get('#Nome').type(this.ecCadastro.razaoSocial)
            cy.get('.col-md-offset-9 > .btn').click()
            cy.get('#ui-tabpanel-1-label > .ui-tabview-title').click()
            cy.get(':nth-child(1) > .active > #nomecliente').click()
            cy.get('#ativarcliente').click()        

            cy.get('#Nome').type(this.ecCadastro.razaoSocial)
            cy.get('.col-md-offset-9 > .btn').click()
            cy.get('#ui-tabpanel-3-label').click()
            cy.get('#ui-tabpanel-3 > .table-layout > .ui-table > .ui-table-wrapper > table > .ui-table-tbody > tr.ng-star-inserted > :nth-child(2)').should('contain', this.ecCadastro.cnpj)
            cy.get('#ui-tabpanel-3 > .table-layout > .ui-table > .ui-table-wrapper > table > .ui-table-tbody > :nth-child(1) > :nth-child(4)').should('contain', 'Ativo')            
        })
        
    }

}