let myValuo = document.querySelector('[name="email"]')
let myform = document.forms[0]
// Image error
let imgError = document.querySelector('#mamman');
// Pargrafe error
let parError = document.querySelector('#myPef')

document.forms[0].onsubmit = function (e) {
    let valdetione = false;
    if (myValuo.value !== "") {
        valdetione = true;
    }
    else {
                imgError.classList.add('error-img')
        imgError.classList.remove('imm')

        parError.classList.add('myPP')
        parError.classList.remove('imm')
    }
    console.log(myValuo.value)
    
    if (valdetione === false) {
        e.preventDefault()
    }
}