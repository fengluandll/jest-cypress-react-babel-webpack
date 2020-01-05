import {buildUser} from '../support/generate'

describe('register', () => {
  it('registers a new user', () => {
    const user = buildUser()
    
    cy.visit('/')
  })
});
