# Cenários de testes


## Visualizar historico de transações, com transações feitas

Dado que estou logado no sistema, com um usuário que já utilizou o sistema
>>
E estando na tela home
>>
Quando clico no menu "Mine"
>>
E abro a tela das minhas transações
>>
Então tenho a informação de todas as transações efetuadas.

## Visualizar historico de transações sem transações feitas

Dado que estou logado no sistema, com um novo usuário
>>
E estando na tela home
>>
Quando clico no menu "Mine"
>>
E abro a tela das minhas transações
>>
Então tenho a informação de que esse usuário ainda não tem transções e um botão para efetuar transações
