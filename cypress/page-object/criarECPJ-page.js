export class ECPJPage {
    visit() {
        cy.visit('https://adquirencia.dev.mobilpay.com.br/')
    }

    login(){
        cy.get('#login').type('luiz.guilherme@b2ml.com.br')
        cy.get('#senha').type('123456')
        cy.get('.login_btn').click()
    }    

    cadastro(){
        i = 21;
        cy.fixture('/ecPJ/stressTest/ecTestePJ'+(i)+'.json').as('ecCadastro').then( function () {
            cy.get('#sidebar-left', {timeout: 60000}).should('be.visible')
            cy.get(':nth-child(8) > #amenu', {timeout: 60000}).should('be.visible')
            cy.get(':nth-child(8) > #amenu').click()
            cy.get('#clientes').should('be.visible')
            cy.get('#clientes').click()
            cy.get('#cadastrocliente').should('be.visible')
            cy.get('#cadastrocliente').click()
            cy.get('#tipo > .ui-dropdown > .ui-dropdown-label').click()
            cy.get(':nth-child(2) > .ui-dropdown-item > .ng-star-inserted').click()
            cy.get('#pj').type(this.ecCadastro.cnpj)
            cy.get('[name=razaoSocial]').type(this.ecCadastro.razaoSocial)
            cy.get('[name=nomeFantasia]').type(this.ecCadastro.nomeFantasia)
            cy.get('#num_cep').type(this.ecCadastro.cep)
            cy.get('[name=numero]').type(this.ecCadastro.numero)
            cy.get('[name=responsavel]').type(this.ecCadastro.clienteResponsavel)
            cy.get('[name=email]').type(this.ecCadastro.email)
            cy.get('[name=telefone]').type(this.ecCadastro.telefoneEmpresa)
            // cy.get('[name=celular]').type(this.ecCadastro.celularContato)
            cy.get('#banco > .ui-dropdown > .ui-dropdown-label').click()
            cy.get(':nth-child(4) > .ui-dropdown-item > .ng-star-inserted').click()
            cy.get('#conta_tipo > .ui-dropdown > .ui-dropdown-label').click()
            cy.get(`li[aria-label="${this.ecCadastro.tipoConta}"]`).click()
            cy.get('[name=conta]').type(this.ecCadastro.conta)
            cy.get('[name=agencia]').type(this.ecCadastro.agencia)
            cy.get('#selectMccs > .ui-dropdown > .ui-dropdown-label').click()
            cy.get('.ui-dropdown-filter').type(this.ecCadastro.filtroAtuacao)
            cy.get(`li[aria-label="${this.ecCadastro.definicaoAtuacao}"]`).click()
            cy.get('#btn_salvar').click()
        })
    }

    ativar() {
        i = 21;
        cy.fixture('ecPJ/stressTest/ecTestePJ'+(i)+'.json').as('ecCadastro').then( function (){    
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
        })
    }
}