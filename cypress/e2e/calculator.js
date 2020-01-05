describe('anonymous calculator', () => {
  it('makes calculations', () => {
    const user = cy
    
    user.visit('/')
      .findByText(/^1$/).click()
      .findByText(/^\+$/).click()
      .findByText(/^2$/).click()
      .findByText(/^=$/).click()
      .get('.mNQM6vIr72uG0YPP56ow5') // 3
      .should('have.text', '3')
  })
});
