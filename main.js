//Burger and other adaptive
//Burger pets
const petsBurgerBtn = document.querySelector('[data-pets-burger]')
const petsNav = document.querySelector('[data-pets-nav]')
const body = document.querySelector('body')
const petsShadow = document.querySelector('[data-pets-shadow]')

// Pets menu burger
let burgerPetsActive = false
let burgerPetsPush = () => {
    petsBurgerBtn.addEventListener('click', () => {
        if (!(burgerPetsActive)) {
            burgerPetsActive = true
            body.classList.add('lock')
            petsBurgerBtn.classList.add('active')
            petsNav.classList.add('active')
            petsShadow.classList.add('active')
        } else {
            burgerPetsActive = false
            body.classList.remove('lock')
            petsBurgerBtn.classList.remove('active')
            petsNav.classList.remove('active')
            petsShadow.classList.remove('active')
        }
    })
}
let shadowPetsPush = () => {
    petsShadow.addEventListener('click', () => {
            burgerPetsActive = false
            body.classList.remove('lock')
            petsBurgerBtn.classList.remove('active')
            petsNav.classList.remove('active')
            petsShadow.classList.remove('active')
    })
}
shadowPetsPush()
burgerPetsPush()















