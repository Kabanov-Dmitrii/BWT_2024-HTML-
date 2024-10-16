const node_for_click = document.getElementById("for_click")

function find_edit() {
    const item = document.getElementById("one")
    console.log(item.innerText)
    item.innerText = 'Kabanov'
    const item2 = document.getElementById("two")
    console.log(item2.innerText)
    item2.innerText = 'Dmitrii'
    const item3 = document.getElementById("three")
    console.log(item3.innerText)
    item3.innerText = 'V October MMIV'
}

node_for_click.addEventListener("click", find_edit)