//Pets data
const petsArr = [
    {
      "name": "Jennifer",
      "img": "img/friends/friends_01.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "img/friends/friends_02.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "img/friends/friends_03.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "img/friends/friends_04.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "img/friends/friends_05.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "img/friends/friends_06.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "img/friends/friends_07.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "img/friends/friends_08.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
]

let pageNumber = 0
//Slider item
const sliderItemsPets = document.querySelectorAll('[data-slider-item-pets]')

//Pets data
const petNamePets = document.querySelectorAll('[data-pet-name-pets]')
const petImagePets = document.querySelectorAll('[data-pet-img-pets]')

const petType = document.querySelector('[data-pet-type]')
const petBreed = document.querySelector('[data-pet-breed]')
const petDescription = document.querySelector('[data-pet-description]')
const petAge = document.querySelector('[data-pet-age]')
const petInoculations = document.querySelector('[data-pet-inoculations]')
const petDiseases = document.querySelector('[data-pet-diseases]')
const petParasites = document.querySelector('[data-pet-parasites]')

//Right-left btns
const sliderBtnRightPets = document.querySelector('[data-slider-right-pets]')
const sliderBtnLeftPets = document.querySelector('[data-slider-left-pets]')
//Btns
const dataBigLeftPets = document.querySelector('[data-big-left-pets]')
const dataBigRightPets = document.querySelector('[data-big-right-pets]')
const dataPagePets = document.querySelector('[data-page-pets]')

//Popup
const popup = document.querySelector('[data-popup]')
const popupClose = document.querySelector('[data-popup-close]')


//Random function Возвращает массив из случайных неповторяющихся цифр от 0 до 7
let randomArrPets = []
function getRandomPets(min, max) { 
    let currentValue = 0
    for (let i = min; randomArrPets.length <= (max - min); i) {
        currentValue = Math.floor(Math.random() * (max - min + 1) + min) 
        if (randomArrPets.indexOf(currentValue) < 0) {
            randomArrPets.push(currentValue)
        }
    }
    console.log(randomArrPets)
    randomArrPets = randomArrPets.map(el => el % 8)
    console.log(randomArrPets)
    return randomArrPets
}
getRandomPets(0, 47)

//Заполнение данных слайдера и попапа
let randomNumberPets = 0
const sliderDataPets = () => {
    let sliderRefreshPets = () => {
        for (let itemNumber = 0; itemNumber < 8; itemNumber++) {
            petNamePets[itemNumber].innerText = petsArr[randomArrPets[pageNumber * 8 + itemNumber]]["name"]
            petImagePets[itemNumber].src = petsArr[randomArrPets[pageNumber * 8 + itemNumber]]["img"]
        }
    }
    sliderRefreshPets()

    //Функции стрелки
    sliderBtnRightPets.addEventListener('click', () => {
        pageNumber = (pageNumber + 1) % 6
        sliderRefreshPets()
        buttonStationRefresh()

        //Анимация слайдера
        for (let i = 0; i < sliderItemsPets.length; i++) {
            const animationLeftPets = sliderItemsPets[i].animate([
                { left: '100%' },
                { left: '0' } 
                ], 500);
            animationLeftPets.addEventListener('finish', function() {
                sliderItemsPets[i].style.left = '0';
            })
        }
    })

    //Функция стрелки
    sliderBtnLeftPets.addEventListener('click', () => {
        pageNumber = (pageNumber + 5) % 6
        sliderRefreshPets()
        buttonStationRefresh()

        //Анимация слайдера
        for (let i = 0; i < sliderItemsPets.length; i++) {
            const animationRightPets = sliderItemsPets[i].animate([
                { left: '-100%' },
                { left: '0' } 
                ], 500);
            animationRightPets.addEventListener('finish', function() {
                sliderItemsPets[i].style.left = '0';
            });
        }
    })

    //Функция двойной стрелки
    dataBigLeftPets.addEventListener('click', () => {
        pageNumber = 0
        sliderRefreshPets()
        buttonStationRefresh()
        //Анимация слайдера
        for (let i = 0; i < sliderItemsPets.length; i++) {
            const animationRightPets = sliderItemsPets[i].animate([
                { left: '-100%' },
                { left: '0' } 
                ], 500);
            animationRightPets.addEventListener('finish', function() {
                sliderItemsPets[i].style.left = '0';
            });
        }
    })

    //Функция двойной стрелки
    dataBigRightPets.addEventListener('click', () => {
        pageNumber = 5
        sliderRefreshPets()
        buttonStationRefresh()

        //Анимация слайдера
        for (let i = 0; i < sliderItemsPets.length; i++) {
            const animationLeftPets = sliderItemsPets[i].animate([
                { left: '100%' },
                { left: '0' } 
                ], 500);
            animationLeftPets.addEventListener('finish', function() {
                sliderItemsPets[i].style.left = '0';
            })
        }
    })

    const buttonStationRefresh = () => {
        dataPagePets.innerText = (pageNumber + 1).toString()
        sliderBtnLeftPets.classList.remove('pets-friends__arrow-unactive')
        dataBigLeftPets.classList.remove('pets-friends__arrow-unactive')
        sliderBtnRightPets.classList.remove('pets-friends__arrow-unactive')
        dataBigRightPets.classList.remove('pets-friends__arrow-unactive')
        if (pageNumber === 0) {
            sliderBtnLeftPets.classList.add('pets-friends__arrow-unactive')
            dataBigLeftPets.classList.add('pets-friends__arrow-unactive')
        } else if (pageNumber === 5) {
            sliderBtnRightPets.classList.add('pets-friends__arrow-unactive')
            dataBigRightPets.classList.add('pets-friends__arrow-unactive')
        }
    }
    buttonStationRefresh()
}
sliderDataPets()

//Показ и скрытие попапа
const sliderItemPushPets = () => {
    for (let i = 0; i < 8; i++) {
        sliderItemsPets[i].addEventListener('click', () => {
          popup.classList.add('popup_active')
          body.classList.add('lock')
          
          petNamePets[8].innerText = petsArr[randomArrPets[pageNumber * 8 + i]]["name"] //Под номером 3 как раз элемент из слайдера
          petImagePets[8].src = petsArr[randomArrPets[pageNumber * 8 + i]]["img"]

          petType.innerText = petsArr[randomArrPets[pageNumber * 8 + i]]["type"] + ' - ' + petsArr[randomArrPets[pageNumber * 8 + i]]["breed"]
          petDescription.innerText = petsArr[randomArrPets[pageNumber * 8 + i]]["description"]
          petAge.innerText = petsArr[randomArrPets[pageNumber * 8 + i]]["age"]
          petInoculations.innerText = petsArr[randomArrPets[pageNumber * 8 + i]]["inoculations"].join('')
          petDiseases.innerText = petsArr[randomArrPets[pageNumber * 8 + i]]["diseases"].join('')
          petParasites.innerText = petsArr[randomArrPets[pageNumber * 8 + i]]["parasites"].join('')
        })
    }
    popupClose.addEventListener('click', () => {
        popup.classList.remove('popup_active')
        body.classList.remove('lock')
    })
}
sliderItemPushPets()