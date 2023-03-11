import { HelloWorld } from './HelloWorld'

describe('<HelloWorld />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HelloWorld message="bob" />)

    cy.get('p').should('contains.text', 'bob')

  })
})