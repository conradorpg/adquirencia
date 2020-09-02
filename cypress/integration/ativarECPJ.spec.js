/// <reference types="cypress" />

const { AtivarECPJ } = require("../page-object/ativarECPJ-page")

describe('Login in Adquirencia', () => {
    const ativarecpj = new AtivarECPJ

    before(() => {
        ativarecpj.visit()
    })

    it('Login', () => {
        ativarecpj.login()
    })

    it('Ativar EC PJ', () => {        
        ativarecpj.ativar()
    })

    // it('Validar CNPJ e Status', () => {
    //     ativarecpj.check
    // })
})