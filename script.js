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