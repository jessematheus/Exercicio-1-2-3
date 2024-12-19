class RegisterPage{
    selectorList(){
        const selectors={
            registerButton:"[href='/signup']",
            firstNameField:"[name='firstName']",
            lastNameField:"[name='lastName']",
            userNameField:"[name='username']",
            passwordField:"[name='password']",
            confirmPawssordField:"[name='confirmPassword']",
            confirmButton:"[data-test='signup-submit']",
            errorCredencials:'#firstName-helper-text'

        }
        return selectors
    }
    accessLoginPage(){
        cy.visit('/')
    }
    userRegister(firstname,lastname,username, password, confirmpassword){
        cy.get(this.selectorList().registerButton).click()
        cy.get(this.selectorList().firstNameField).type(firstname)
        cy.get(this.selectorList().lastNameField).type(lastname)
        cy.get(this.selectorList().userNameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().confirmPawssordField).type(confirmpassword)
        cy.get(this.selectorList().confirmButton).click()
    }
    userRegisterWhitError(lastname,username, password, confirmpassword){
        cy.get(this.selectorList().registerButton).click()
        cy.get(this.selectorList().lastNameField).type(lastname)
        cy.get(this.selectorList().userNameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().confirmPawssordField).type(confirmpassword)
        cy.get(this.selectorList().errorCredencials)
    }
}
export default RegisterPage

// describe('Registro de novo usuário com sucesso', () => {
//     it('Deve registrar um novo usuário com informações válidas', () => {
//       cy.visit('/')
//       cy.get("[href='/signup']").click()
//       cy.get("[name='firstName']").type('testeJ')
//       cy.get("[name='lastName']").type('testeJ')
//       cy.get("[name='username']").type('Teste2')
//       cy.get("[name='password']").type('12345')
//       cy.get("[name='confirmPassword']").type('12345')
//       cy.get("[data-test='signup-submit']").click()

//     });
  
//   });
