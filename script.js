const userEl = document.querySelector('[name ="user"]')

const showCurrentUserId = function() {
    console.log(userEl.value)
}

if(userEl) {
    userEl.addEventListener('change', showCurrentUserId)
}

const btn = document.querySelector('.counter')

function incrementCounter() {
    let value = parseInt(btn.innerText)
    btn.innerText = ++value

    if(value > 3) {
        btn.removeEventListener('click', incrementCounter)
    }
}

btn.addEventListener('click', incrementCounter)

///////////////////////////////////////////////////////////////////
const section1 = document.querySelector('.section')

const addClassName = function() {
    const className = this.tagName.toLowerCase();
    this.classList.add(className)
    console.log(className + " was clicked")
}

if(btn && section1) {
    btn.addEventListener('click', addClassName)
    section1.addEventListener('click', addClassName)
}

//showcase bubbling phase
const itemList = document.querySelectorAll('.bubblingSection, bubblingArticle, h1')

const showTagName = function() {
    console.log(this.tagName)
}

itemList.forEach((item) => {
    item.addEventListener('click', showTagName, true)
})