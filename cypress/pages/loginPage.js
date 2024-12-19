class LoginPage{
    selectorList(){
        const selectors={
            usernameField:"[name='username']",
            passwordField:"[name='password']",
            loginButton:"[data-test='signin-submit']",
            wrongCredentialAlertSuccess: "[aria-selected='true']",
            wrongCredentialAlertError:'[data-test="signin-error"]',
        }
        return selectors
    }
    accessLoginPage(){
      cy.visit('/')
    }
    loginWithUser(username, password){
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().wrongCredentialAlertSuccess)
      }
    loginWithErrorCredencials(username, password){
      cy.get(this.selectorList().usernameField).type(username)
      cy.get(this.selectorList().passwordField).type(password)
      cy.get(this.selectorList().loginButton).click()
      cy.get(this.selectorList().wrongCredentialAlertError)
    }
}
export default LoginPage
