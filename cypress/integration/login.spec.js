///<reference types="cypress"/>
import login from '../fixtures/login.json'

describe('Login', () => {
    beforeEach (() => {
        cy.visit('https://importados.petz.com.br')
    })

    it('Validar login sucesso', () => {
        cy.efetuarLogin(login.email, login.senha)
        cy.get('.username').should('have.text', 'Isleyne')

        
    })
    it('Validar login insucesso', () => {
        cy.efetuarLogin(login.email, login.senha_invalida)
        cy.msgErro(login.msg_erro)
        
    })

})