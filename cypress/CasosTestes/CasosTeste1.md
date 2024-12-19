# Cenários de testes


## Login com sucesso / usuário cadastrado

Dado que Tenho uma conta cadastrada
E estando na tela de login
Quando tento efetuar o login com meus dados cadastrados
Então tenho a confirmação de login com sucesso

## Cadastro de usuário

Dado que não tenho uma conta
E estando na tela de login
E tendo o botão de cadastro
E clicando no botão abro a tela de cadastro
Quando preencho os campos com dados validos 
Então tenho a confirmação de que meu usuário foi cadastrado com sucesso

## Cadastro de usuário faltando informações

Dado que não tenho uma conta
E estando na tela de login
E tendo o botão de cadastro
E clicando no botão abro a tela de cadastro
Quando estou preenchendo, deixo faltando algumas informações
Então tenho a mensagem de erro, de que alguns dados estão faltando ser preenchidos


## Tentativa de login com credenciais inválidas

Dado que quero acessar o sistema
E estando na tela de login
Quando tento efetuar o login sem informar uma credencial valida
Então tenho a mensagem de erro, usuário ou senha invalido



