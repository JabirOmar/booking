const menuBox = document.getElementById('menu-box')
const rightNav = document.getElementById('right-nav')
let logo = document.getElementById('left-nav')
// let tour = document.querySelector('.title')

menuBox.addEventListener('click', () => {
    menuBox.classList.toggle('clicked')
    rightNav.classList.toggle('active')
})

logo.addEventListener('click', ()=>{
    window.scrollTo(0, 0)
})
const home = function (){
    window.scrollTo(0, 0)
}
function book(){
    document.querySelector('form').scrollIntoView({block: 'start'})
}

const tour = function (){
    document.querySelector('.title').scrollIntoView({block: 'start', inline: 'nearest'});
}


// function button(){
//     const ticket = document.getElementById('output')
//     let from = document.getElementById('from-city').value;
//     let to = document.getElementById('to-city').value;
//     let fly = document.getElementById('fly').value;
//     let land = document.getElementById('land').value;

//     // console.log('Flying from ' + from[0].toUpperCase() + from.substring(1) + ' to ' + to + ' on ' + fly)
//     // console.log('Flying from ' + to[0].toUpperCase() + to.substring(1) + ' to ' + from[0].toUpperCase() + from.substring(1) + ' on ' + land)


//     // function print () {
//     //     ticket.innerHTML (
//     //     '<h4>Flying from ${from} to ${to} on ${fly}</h4>'
//     //     )
//     // }
//     // print()
// }
// button()



const ticket = document.getElementById('person-name')

function button() {
    const theName = document.getElementById('from-city').value;
    
    ticket.innerText = theName
}

ticket.addEventListener('click', ()=>{
    console.log('right path')
})


