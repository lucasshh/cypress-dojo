
Cypress.Commands.add('efetuarLogin', (email, senha) => {
    cy.get('.LoginButton__login').click({force: true})
        cy.get('#login').type(email)
        cy.get('#password').type(senha)
        cy.get('.button-petz').click()

})

Cypress.Commands.add('msgErro', (msg) => {
    cy.get('.Toastify__toast').should('have.text', msg)

})
