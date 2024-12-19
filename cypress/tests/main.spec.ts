import userData from '../../fixtures/users/userData.json'
import LoginPage from '../../pages/loginPage.js'
import RegisterPage from '../../pages/registerPage.js'
import SendMoneyPage from '../../pages/sendMoney.js'
import ViewPage from '../../pages/viewPage.js'

const loginPage = new LoginPage()
const registerPage = new RegisterPage()
const sendMoney = new SendMoneyPage()
const viewPage = new ViewPage()


it('Register - Success',()=>{
registerPage.accessLoginPage()    
registerPage.userRegister(userData.userCadastro.firstName, userData.userCadastro.lastName,
userData.userCadastro.username, userData.userCadastro.password,userData.userCadastro.confirmPassword 
)
})

it('Register - Fail',()=>{
registerPage.accessLoginPage()    
registerPage.userRegisterWhitError(userData.userCadastro.lastName, userData.userCadastro.username, 
userData.userCadastro.password,userData.userCadastro.confirmPassword 
)
})

it('Login - Fail',()=>{
loginPage.accessLoginPage()
loginPage.loginWithErrorCredencials(userData.userFail.username, userData.userFail.password)    
})

it('Login - Success',()=>{
loginPage.accessLoginPage()
loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
})

it('SendMoney - WhitMoneyInBalance',()=>{
sendMoney.accessLoginPage()
sendMoney.sendMoney(userData.userSuccess.username, userData.userSuccess.password)
})
it('SendMoney - NoMoneyInBalance',()=>{
sendMoney.accessLoginPage()
sendMoney.sendNoMoneyBalance(userData.adminUser.username, userData.adminUser.password)
})
it('ViewTransation',()=>{
viewPage.accessLoginPage()
viewPage.viewTransation(userData.adminUser.username, userData.adminUser.password)
})
it.only('ViewNoTranstions',()=>{
viewPage.accessLoginPage()
viewPage.registerUserNoTransations(userData.semNada.firstName, userData.semNada.lastName,
    userData.semNada.username, userData.semNada.password,userData.semNada.confirmPassword
)
viewPage.viewNoTransations(userData.semNada.username, userData.semNada.password)
})