import {buildUser} from '../support/generate'

describe('register', () => {
  it('registers a new user', () => {
    const user = buildUser()
    
    // noinspection JSCheckFunctionSignatures
    cy.visit('/')
      .findByText(/register/i).click()
      .findByLabelText(/username/i).type(user.username)
      .findByLabelText(/password/i).type(user.password)
      .findByText(/submit/i).click()
      .url()
      .should('eq', 'http://localhost:8080/')
      .window()
      .its('localStorage.token')
      .should('be.a', 'string')
  })
});
