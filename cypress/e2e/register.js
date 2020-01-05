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
  })
});
