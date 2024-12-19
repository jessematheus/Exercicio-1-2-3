# Cenários de testes

## Enviar dinheiro com Saldo

Dado que estou logado no sistema
E estando na tela de pagamentos
Quando tento efetuar um pagamento, estando com saldo em conta
Então tenho a confirmação transação efetuada com sucesso

## Enviar dinheiro sem saldo

Dado que estou logado no sistema
E estando na tela de pagamentos
Quando tento efetuar um pagamento, estando sem saldo em conta
Então tenho a mensagem, não foi possível efetuar a transação

