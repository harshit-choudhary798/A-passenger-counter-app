let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerHTML+=countStr
    count=0
    countEl.textContent = count
   
}

console.log("hello"+" "+(5+9))
