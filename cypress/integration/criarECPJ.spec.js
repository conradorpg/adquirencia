/// <reference types="cypress" />

const { ECPJPage } = require("../page-object/criarECPJ-page")

        
describe('Login in Adquirencia', () => {
    const ecpjPage = new ECPJPage

    before(() => {
        ecpjPage.visit()
    })

    it('Login', () => {
        ecpjPage.login()
    })    

    it('Cadastro EC PJ', () => { 
        ecpjPage.cadastro()
    })         

    it('Ativar EC PJ', () => {        
        ecpjPage.ativar()
    })
})