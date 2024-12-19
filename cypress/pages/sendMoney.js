class SendMoneyPage{
    selectorList(){
        const selectors={
        usernameField:"[name='username']",
        passwordField:"[name='password']",
        loginButton:"[data-test='signin-submit']",    
        newTransacion:"[href='/transaction/new']",
        searchPeople:"[name='q']",
        selectPeople:".css-1p823my-MuiListItem-root",
        amount:"[name='amount']",
        description:"[placeholder='Add a note']",
        payButton:"[data-test='transaction-create-submit-payment']",
        successAlert:'[data-test="alert-bar-success"]',
        logoutButton:"[data-test='sidenav-signout']",
        }
        return selectors
    }
    accessLoginPage(){
        cy.visit('/')
    }
    sendMoney(username,password){
        //logado com a conta TesteJ
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().newTransacion).click()
        cy.get(this.selectorList().searchPeople).type('testJ')
        cy.get(this.selectorList().selectPeople).eq(1).click()
        cy.get(this.selectorList().amount).type('500')
        cy.get(this.selectorList().description).type('Teste pagamento com saldo')
        cy.get(this.selectorList().payButton).click()
        cy.get(this.selectorList().successAlert)
    }
    sendNoMoneyBalance(username,password){
        //logado com a conta Heath93
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().newTransacion).click()
        cy.get(this.selectorList().searchPeople).type('Heath93')
        cy.get(this.selectorList().selectPeople).eq(1).click()
        cy.get(this.selectorList().amount).type('99999999')
        cy.get(this.selectorList().description).type('Teste pagamento sem saldo')
        cy.get(this.selectorList().payButton).click()
        cy.get(this.selectorList().successAlert)
    }

    logoutButton(){
        cy.get(this.selectorList().logoutButton).click()
    }
}
export default SendMoneyPage

// describe('Enviar dinheiro com saldo suficiente', () => {
//     it('Deve enviar dinheiro com sucesso', () => {
//           cy.visit('/')
//       cy.get("[name='username']").type('TesteJ')
//       cy.get("[name='password']").type('12345')
//       cy.get("[data-test='signin-submit']").click()
//       cy.get("[href='/transaction/new']").click()
//       cy.get("[name='q']").type('testeJ')
//       cy.get(".css-1p823my-MuiListItem-root").eq(1).click()
//       cy.get("[name='amount']").type('500')
//       cy.get("[placeholder='Add a note']").type('Teste pagamento com saldo')
//       cy.get("[data-test='transaction-create-submit-payment']").click()
//       cy.get('[data-test="alert-bar-success"]')
//       cy.get("[data-test='sidenav-signout']").click()
//       cy.get("[name='username']").type('Heath93')
//       cy.get("[name='password']").type('s3cret')
//       cy.get("[data-test='signin-submit']").click()
  
//     });
//   });
//   describe('Enviar dinheiro com saldo insuficiente', () => {
//     it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
//           cy.visit('/')
//       cy.get("[name='username']").type('Heath93')
//       cy.get("[name='password']").type('s3cret')
//       cy.get("[data-test='signin-submit']").click()
//       cy.get("[href='/transaction/new']").click()
//       cy.get("[name='q']").type('testeJ')
//       cy.get(".css-1p823my-MuiListItem-root").eq(1).click()
//       cy.get("[name='amount']").type('555500')
//       cy.get("[placeholder='Add a note']").type('Teste pagamento sem saldo')
//       cy.get("[data-test='transaction-create-submit-payment']").click()
//       cy.get("[data-test='sidenav-signout']").click()
//       cy.get("[name='username']").type('TesteJ')
//       cy.get("[name='password']").type('12345')
//       cy.get("[data-test='signin-submit']").click()
        //Teste Falhou, pois permitiu enviar um valor que não consta na conta
//     });
//   });