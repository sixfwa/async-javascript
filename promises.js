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

getItems()
addItem("oranges").then(getItems).catch(error => alert(error))