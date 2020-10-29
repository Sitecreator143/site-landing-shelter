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


//Slider and other function
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
//Slider item
const sliderItems = document.querySelectorAll('[data-slider-item]')

//Pets data
const petName = document.querySelectorAll('[data-pet-name]')
const petImage = document.querySelectorAll('[data-pet-img]')
const petType = document.querySelector('[data-pet-type]')
const petBreed = document.querySelector('[data-pet-breed]')
const petDescription = document.querySelector('[data-pet-description]')
const petAge = document.querySelector('[data-pet-age]')
const petInoculations = document.querySelector('[data-pet-inoculations]')
const petDiseases = document.querySelector('[data-pet-diseases]')
const petParasites = document.querySelector('[data-pet-parasites]')

//slider elements
const sliderBtnRight = document.querySelector('[data-slider-right]')
const sliderBtnLeft = document.querySelector('[data-slider-left]')

//Popup
const popup = document.querySelector('[data-popup]')
const popupClose = document.querySelector('[data-popup-close]')





//Random function Возвращает массив из случайных неповторяющихся чисел
let randomArr = []
function getRandom(min, max) { 
  let currentValue = 0
  for (let i = min; randomArr.length <= (max - min); i) {
    currentValue = Math.floor(Math.random() * (max - min + 1) + min) 
    if (randomArr.indexOf(currentValue) < 0) {
      randomArr.push(currentValue)
    }
  }
  console.log(randomArr)
  return randomArr
}
getRandom(0, 7)

//Заполнение данных слайдера и попапа
let randomNumber = 0
const sliderData = () => {
  
  let sliderRefresh = () => {
    let itemNumber = 0
    petName[itemNumber].innerText = petsArr[randomArr[randomNumber]]["name"]
    petImage[itemNumber].src = petsArr[randomArr[randomNumber]]["img"]
  /*   petType[itemNumber].innerText = petsArr[randomArr[randomNumber]]["type"] + ' - ' + petsArr[randomArr[randomNumber]]["breed"]
    petDescription[itemNumber].innerText = petsArr[randomArr[randomNumber]]["description"]
    petAge[itemNumber].innerText = petsArr[randomArr[randomNumber]]["age"]
    petInoculations[itemNumber].innerText = petsArr[randomArr[randomNumber]]["inoculations"].join('')
    petDiseases[itemNumber].innerText = petsArr[randomArr[randomNumber]]["diseases"].join('')
    petParasites[itemNumber].innerText = petsArr[randomArr[randomNumber]]["parasites"].join('') */
  
    itemNumber++
    petName[itemNumber].innerText = petsArr[randomArr[(randomNumber + 1) % 8 ]]["name"]
    petImage[itemNumber].src = petsArr[randomArr[(randomNumber + 1) % 8 ]]["img"]
  
    itemNumber++
    petName[itemNumber].innerText = petsArr[randomArr[(randomNumber + 2) % 8 ]]["name"]
    petImage[itemNumber].src = petsArr[randomArr[(randomNumber + 2) % 8 ]]["img"]
  }
  sliderRefresh()

  //Функции стрелки
  sliderBtnRight.addEventListener('click', () => {
    randomNumber = (randomNumber + 3) % 8 
    sliderRefresh()

    //Анимация слайдера
    for (let i = 0; i < sliderItems.length; i++) {
      const animationLeft = sliderItems[i].animate([
        { left: '100%' },
        { left: '0' } 
      ], 500);
      animationLeft.addEventListener('finish', function() {
        sliderItems[i].style.left = '0';
      });
    }
  })

  //Функция стрелки
  sliderBtnLeft.addEventListener('click', () => {
    randomNumber = (randomNumber + 5) % 8
    sliderRefresh()

    //Анимация слайдера
    for (let i = 0; i < sliderItems.length; i++) {
      const animationRight = sliderItems[i].animate([
        { left: '-100%' },
        { left: '0' } 
      ], 500);
      animationRight.addEventListener('finish', function() {
        sliderItems[i].style.left = '0';
      });
    }
  })
}
sliderData()

//Показ и скрытие попапа
const sliderItemPush = () => {
    for (let i = 0; i < 3; i++) {
        sliderItems[i].addEventListener('click', () => {
          popup.classList.add('popup_active')
          body.classList.add('lock')
          
          petName[3].innerText = petsArr[randomArr[(randomNumber + i) % 8 ]]["name"]
          petImage[3].src = petsArr[randomArr[(randomNumber + i) % 8 ]]["img"]

          petType.innerText = petsArr[randomArr[(randomNumber + i) % 8 ]]["type"] + ' - ' + petsArr[randomArr[(randomNumber + i) % 8 ]]["breed"]
          petDescription.innerText = petsArr[randomArr[(randomNumber + i) % 8 ]]["description"]
          petAge.innerText = petsArr[randomArr[(randomNumber + i) % 8 ]]["age"]
          petInoculations.innerText = petsArr[randomArr[(randomNumber + i) % 8 ]]["inoculations"].join('')
          petDiseases.innerText = petsArr[randomArr[(randomNumber + i) % 8 ]]["diseases"].join('')
          petParasites.innerText = petsArr[randomArr[(randomNumber + i) % 8 ]]["parasites"].join('')
        })
    }
    popupClose.addEventListener('click', () => {
        popup.classList.remove('popup_active')
        body.classList.remove('lock')
    })
}
sliderItemPush()















