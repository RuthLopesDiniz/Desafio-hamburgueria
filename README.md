<h2 align="center">Cadastro de pedidos de uma hamburgueria <br> <br> 
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> &
 <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"></h2>

<h2>Rotas</h2>
<h4>POST /orders:</h4>Esta rota recebe informações sobre um pedido de um cliente em uma hamburgueria, essas informações são passadas dentro do corpo(body) da requisição, e 
registrado o novo pedido dentro de um array no seguinte formato: <br>
<br>
[ { <br>id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", <br>order: "X- Salada, 2 batatas grandes, 1 coca-cola", <br>clientName: "José", <br>price: 44.50, <br>status: "
Em preparação" <br>} ] <br>
<br>
O ID é gerado utilizando UUID V4 assim que o pedido é criado.

<h4>GET /orders:</h4> Esta rota lista todos os pedidos já feitos.

<h4>PUT /orders/:id:</h4> Esta rota altera um pedido já feito. Pode alterar,um ou todos os dados do pedido. O id do pedido é enviado nos parâmetros da rota.

<h4>DELETE /orders/:id:</h4> Esta rota deleta um pedido já feito com o id enviado nos parâmetros da rota.

<h4>GET /orders/:id:</h4> Esta rota recebe o id nos parâmetros e retorna um pedido específico.

<h4>PATCH /orders/:id:</h4> Esta rota recebe o id nos parâmetros e assim que ela é chamada, altera o status do pedido recebido pelo id para "Pronto".

<h3>Ferramentas utilizadas:<h3>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
 <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
 <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
