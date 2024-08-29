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

const renderInfo = function(e) {
    let text = parseInt(e.timeStamp / 1000)
    text += ':' + this.tagName;
    text += ' -> ' + e.type
   console.log(text)
}

itemList.forEach((item) => {
    item.addEventListener('mouseenter', showTagName, true)
})
/////////////////////
const btnEvent1 = document.querySelector('.event1');
const btnEvent2 = document.querySelector('.event2');


console.log(btnEvent1)

const showInformation = function(e) {
    console.log(e.type, this.innerText);
}
    btnEvent1.addEventListener('click', showInformation)
    btnEvent2.addEventListener('mouseenter', showInformation)
    
    btnEvent2.addEventListener('mouseenter', renderInfo)

////////////////////
const linksList = document.querySelectorAll('a')
/* const getHref = function(e) {
    e.preventDefault()

    const href = this.getAttribute('href')

    console.log(href)
}

linksList.forEach((link) => {
    link.addEventListener('click', getHref)
}) */


const confirmRedirect = function(e) {
    const newUrl = this.getAttribute('href')
    const userDecision = confirm(
        'Are you sure' + newUrl
    )

    if(!userDecision) {
        e.preventDefault
    }
}

linksList.forEach((link) => {
    link.addEventListener('click', confirmRedirect)
})
/////////////////////
const btnElement = document.querySelector('.fire_event');
const pElement = document.querySelector('.loading');

const handleRender = function(e) {
    this.innerText = e.detail
}

const handleClick = function() {
    const renderEvent = new CustomEvent('render', {detail: 'new content!'})
    pElement.dispatchEvent(renderEvent);
}


btnElement.addEventListener('click', handleClick)
pElement.addEventListener('render', handleRender)
