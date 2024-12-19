class ViewPage{
        selectorList(){
            const selectors={
                usernameField:"[name='username']",
                passwordField:"[name='password']",
                loginButton:"[data-test='signin-submit']",
                minePage:"[data-test='nav-personal-tab']",
                selectTransation:'.TransactionItem-paper',
                viewTransation:"[tabindex='0']",
                
            }
            return selectors
        }
        registerSelectorList(){
            const selectors={
                registerButton:"[href='/signup']",
                firstNameField:"[name='firstName']",
                lastNameField:"[name='lastName']",
                userNameField:"[name='username']",
                passwordField:"[name='password']",
                confirmPawssordField:"[name='confirmPassword']",
                confirmButton:"[data-test='signup-submit']",
                minePage:"[data-test='nav-personal-tab']",
                alertNoTransations:"[data-test='empty-list-header']"
            }
            return selectors
        }
        accessLoginPage(){
          cy.visit('/')
        }
        viewTransation(username, password){
            cy.get(this.selectorList().usernameField).type(username)
            cy.get(this.selectorList().passwordField).type(password)
            cy.get(this.selectorList().loginButton).click()
            cy.get(this.selectorList().minePage).should('be.visible').click()
            cy.get(this.selectorList().viewTransation).eq(11).should('be.visible')
        }
        registerUserNoTransations(firstname,lastname,username, password, confirmpassword){
            cy.get(this.registerSelectorList().registerButton).click()
            cy.get(this.registerSelectorList().firstNameField).type(firstname)
            cy.get(this.registerSelectorList().lastNameField).type(lastname)
            cy.get(this.registerSelectorList().userNameField).type(username)
            cy.get(this.registerSelectorList().passwordField).type(password)
            cy.get(this.registerSelectorList().confirmPawssordField).type(confirmpassword)
            cy.get(this.registerSelectorList().confirmButton).click()
        }
        viewNoTransations(username, password){
            cy.get(this.selectorList().usernameField).type(username)
            cy.get(this.selectorList().passwordField).type(password)
            cy.get(this.selectorList().loginButton).click()               
            cy.get(this.registerSelectorList().minePage).should('be.visible').click()
            cy.get(this.registerSelectorList().alertNoTransations).should('be.visible')
                
            


        }
    }
export default ViewPage