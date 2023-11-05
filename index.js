const express = require('express')//mostra que precisa do express pra funcionar.
const uuid = require('uuid')//mostra que precisa da biblioteca uuid para funcionar
const app = express()
app.use(express.json())

const orders = []

const checkOrderId = (request, reponse, next)=> {
    const { id } = request.params

    const index = orders.findIndex(order =>order.id === id)//interar user /user e verificar se id existe

    if(index < 0){
        return response.status(404).json({error: "Order not found"}) //retorna resposta caso não exista
    }

    request.orderIndex = index
    request.orderId = id
    next()
}

//rota para listar todos os projetos incluidos
app.get('/orders', (request, response) => {
    return response.json(orders)
})

//rota para incluir novo pedido
app.post('/orders', (request, response) => {
const {order, clientName, price, status} = request.body

    const orderClient = {id:uuid.v4(), order, clientName, price, status}
    orders.push(orderClient)
    return response.status(201).json(orderClient)
})

//rota que altera um pedido a partir da chamada do id
app.put('/orders/:id', checkOrderId, (request, response) => {
    
    const { order, clientName, price, status} = request.body
    const index = request.orderIndex
    const id = request.orderId

    const updateOrder = {id, order, clientName, price, status}

    orders[index] = updateOrder
    return response.json(updateOrder)
})

//rota para deletar um pedido específico por id
app.delete('/orders/:id', checkOrderId, (request, response) => {
    const index = request.orderIndex
    
    orders.splice(index, 1)

    return response.status(204).json()
})

//rota que recebe o id nos parâmetros e mostra o pedido específico
app.get('/orders/:id', (request, response) => {
    const { id } = request.params
    
    const index = orders.find(order =>order.id === id)//interar user por user

    if(index < 0){
        return response.status(404).json({error: "Order not found"})
    }

    return response.json(index)
})

//Rota que recebe o id nos parâmetros e quando chamada altera o status do pedido recebido para pronto
app.patch('/orders/:id', (request, response) => {
    const  id  = request.params.id
    const orderIndex = orders.findIndex((order) => order.id ===id)
    
    orders[orderIndex].status= "Pronto"
    return response.json(orders[orderIndex])
})


app.listen(3000, ()=> {//porta onde o projeto está sendo rodado
    console.log('Server started :)')//MENSAGEM MOSTRADA AO RODAR O SERVIDOR
})

