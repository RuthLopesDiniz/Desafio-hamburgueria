<h2 align="center">Cadastro de pedidos de uma hamburgueria <br> <br> 
  Node e Express</h2>

<h2>Rotas</h2>
<h4>POST /orders:</h4>A rota recebe informações sobre um pedido de um cliente em uma hamburgueria, essas informações são passadas dentro do corpo(body) da requisição, e 
registrado o novo pedido dentro de um array no seguinte formato: <br>
<br>
{ <br>id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", <br>order: "X- Salada, 2 batatas grandes, 1 coca-cola", <br>clientName: "José", <br>price: 44.50, <br>status: "
Em preparação" <br>} <br>
<br>
O ID é gerado utilizando UUID V4 assim que o pedido é criado.

<h4>GET /orders:</h4> Rota lista todos os pedidos já feitos.

<h4>PUT /orders/:id:</h4> Essa rota altera um pedido já feito. Pode alterar,um ou todos os dados do pedido. O id do pedido é enviado nos parâmetros da rota.

<h4>DELETE /orders/:id:</h4> Deleta um pedido já feito com o id enviado nos parâmetros da rota.

<h4>GET /orders/:id:</h4> Essa rota recebe o id nos parâmetros e retorna um pedido específico.

<h4>PATCH /orders/:id:</h4> Essa rota recebe o id nos parâmetros e assim que ela é chamada, altera o status do pedido recebido pelo id para "Pronto".
