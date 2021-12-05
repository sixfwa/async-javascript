let orders = [
    {item: "Harry Potter book", user: "Snape", background: "AliceBlue"},
    {item: "The Godfather", user: "Michael", background: "Beige"},
    {item: "Bowl of Fruit", user: "Mary", background: "AntiqueWhite"},
]

const getOrders = () => {
    setTimeout(() => {
        let list = ""
        orders.forEach((order, index) => {
            list += `<li style="background-color:${order.background}">${order.item}</li>`
        })
        document.body.innerHTML = list
    }, 500)
}

const createOrder = (newOrder, callback) => {
    setTimeout(() => {
        orders.push(newOrder)
        callback() // getOrders()
    }, 1000)
}

getOrders()
createOrder({item: "Chocolate Cake", user: "Larry", background:"BlanchedAlmond"}, getOrders)
