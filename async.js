let items = ["apples", "bananas", "pears"]

const getItems = () => {
    setTimeout(() => {
        let itemList = ""
        items.forEach((item) => {
            itemList += `<li>${item}</li>`
        })
        document.body.innerHTML = itemList
    }, 500)
}

const addItem = (item) => {
    // we cannot add duplicate items
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (items.includes(item)) {
                reject(`${item} already in the list`)
            }
            items.push(item)
            resolve()
        }, 1000)
    })
}

const asyncCall = async () => {
    try {
        await addItem("pears")
        getItems()
    } catch(error) {
        alert(error)
    }
}

// asyncCall()

const getTodos = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()

        let todoList = ""
        data.forEach((item) => {
            todoList += `<li>${item.title}</li>`
        })
        document.body.innerHTML = todoList
    } catch(error) {
        console.error(error)
        alert(error)
    }
}

getTodos()