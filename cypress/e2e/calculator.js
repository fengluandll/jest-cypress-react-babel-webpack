describe('anonymous calculator', () => {
  it('makes calculations', () => {
    const user = cy
    
    user.visit('/')
      .findByText(/^1$/).click()
      .findByText(/^\+$/).click()
      .findByText(/^2$/).click()
      .findByText(/^=$/)
      .pause()
      .click()
      .findByTestId('total')
      .should('have.text', '4')
  })
});
