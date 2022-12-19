<script lang="ts" setup>
function findPhoto(photo_url: string) {
  console.log(JSON.parse(photo_url))

  return require(JSON.stringify(photo_url))
}

interface IProduct {
  id: number
  title: string
  price: number
  currency: string
  image_url: string
  discount: boolean
}
const products: Array<IProduct> = [
  {
    id: 1,
    image_url: '/assets/site/polotno1.jpg',
    price: 123,
    title: 'Нетканое полотно ширина 1.5 м, длина 50 м',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 2,
    title: 'Нетканое полотно ширина 1.5 м, длина 60 м',
    price: 154,
    image_url: '/assets/site/polotno2.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 3,
    title: 'Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2',
    price: 560,
    image_url: '/assets/site/polotno4.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 4,
    title: 'Нетканое полотно ширина 0.75 м, длина 50 м',
    price: 450,
    image_url: '/assets/site/polotno3.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 5,
    title: 'Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2',
    price: 850,
    image_url: '/assets/site/byaz1.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 6,
    title: 'Бязь отбеленная ширина 1.5 м., длина 100 м. 100 гр/м2 ',
    price: 1150,
    image_url: '/assets/site/byaz2.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 7,
    title: 'Ситец мадапалам отбеленный ширина 80см, длина 100м. 70 гр/м2',
    price: 250,
    image_url: '/assets/site/sitets.jpg',
    discount: false,
    currency: 'рублъ',
  }, {
    id: 2,
    title: 'Нетканое полотно ширина 1.5 м, длина 60 м',
    price: 154,
    image_url: '/assets/site/polotno2.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 3,
    title: 'Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2',
    price: 560,
    image_url: '/assets/site/polotno4.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 4,
    title: 'Нетканое полотно ширина 0.75 м, длина 50 м',
    price: 450,
    image_url: '/assets/site/polotno3.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 5,
    title: 'Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2',
    price: 850,
    image_url: '/assets/site/byaz1.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 6,
    title: 'Бязь отбеленная ширина 1.5 м., длина 100 м. 100 гр/м2',
    price: 1150,
    image_url: '/assets/site/byaz2.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 7,
    title: 'Ситец мадапалам отбеленный ширина 80см, длина 100м. 70 гр/м2',
    price: 250,
    image_url: '/assets/site/sitets.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 8,
    title: 'Веник сорго-щётка 3-х лучевой 220-280 гр. В связке по 50 шт.',
    price: 500,
    image_url: '/assets/site/venik1.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 9,
    title: 'Веник сорго трёх прошивной 300-350 гр. В связке по 50 шт.',
    price: 140,
    image_url: '/assets/site/venik2.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 10,
    title: 'Веник сорго 3-х лучевой 400-500 гр. В связке по 50 шт.',
    price: 510,
    image_url: '/assets/site/venik3.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 11,
    title: 'Веник сорго_молдавский двух прошивной 300-350 гр. В связке по 50 шт.',
    price: 450,
    image_url: '/assets/site/venik4.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 12,
    title: 'Веник сорго 3-х лучевой 300-350 гр. В связке по 50 шт.',
    price: 560,
    image_url: '/assets/site/venik5.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 13,
    title: 'Метла сорго 350-450 гр. В связке по 12 шт.',
    price: 615,
    image_url: '/assets/site/venik6.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 8,
    title: 'Веник сорго-щётка 3-х лучевой 220-280 гр. В связке по 50 шт.',
    price: 500,
    image_url: '/assets/site/venik1.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 9,
    title: 'Веник сорго трёх прошивной 300-350 гр. В связке по 50 шт.',
    price: 140,
    image_url: '/assets/site/venik2.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 10,
    title: 'Веник сорго 3-х лучевой 400-500 гр. В связке по 50 шт.',
    price: 510,
    image_url: '/assets/site/venik3.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 11,
    title: 'Веник сорго_молдавский двух прошивной 300-350 гр. В связке по 50 шт.',
    price: 450,
    image_url: '/assets/site/venik4.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 12,
    title: 'Веник сорго 3-х лучевой 300-350 гр. В связке по 50 шт.',
    price: 560,
    image_url: '/assets/site/venik5.jpg',
    discount: false,
    currency: 'рублъ',
  },
  {
    id: 13,
    title: 'Метла сорго 350-450 гр. В связке по 12 шт.',
    price: 615,
    image_url: '/assets/site/venik6.jpg',
    discount: false,
    currency: 'рублъ',
  },
]
</script>

<template>
  <div class="heading">
    <span class="title">Katalog</span>
  </div>
  <div class="page">
    <div class="sidebar">
      <div class="sidebar-buttons">
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno1.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 50 м </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno2.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 60 м</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno3.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 0.75 м, длина 50 м</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Нетканое полотно ХПП
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno4.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Вафельное полотно
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/byaz1.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2 </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/byaz2.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 100 гр/м2 </span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Бязь
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/sitets.jpg" width="50" alt="">
              <span>Ситец мадапалам отбеленный ширина 80см, длина 100м. 70 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Ситец
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/venik1.jpg" width="50" alt="">
              <span>Веник сорго-щётка 3-х лучевой 220-280 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik2.jpg" width="50" alt="">
              <span>Веник сорго трёх прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik3.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 400-500 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik4.jpg" width="50" alt="">
              <span>Веник сорго_молдавский двух прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik5.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik6.jpg" width="50" alt="">
              <span>Метла сорго 350-450 гр. В связке по 12 шт.</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Веник сорго
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno1.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 50 м </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno2.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 60 м</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno3.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 0.75 м, длина 50 м</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Нетканое полотно ХПП
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno4.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Вафельное полотно
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/byaz1.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2 </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/byaz2.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 100 гр/м2 </span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Бязь
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/sitets.jpg" width="50" alt="">
              <span>Ситец мадапалам отбеленный ширина 80см, длина 100м. 70 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Ситец
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/venik1.jpg" width="50" alt="">
              <span>Веник сорго-щётка 3-х лучевой 220-280 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik2.jpg" width="50" alt="">
              <span>Веник сорго трёх прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik3.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 400-500 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik4.jpg" width="50" alt="">
              <span>Веник сорго_молдавский двух прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik5.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik6.jpg" width="50" alt="">
              <span>Метла сорго 350-450 гр. В связке по 12 шт.</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Веник сорго
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno1.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 50 м </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno2.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 60 м</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno3.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 0.75 м, длина 50 м</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Нетканое полотно ХПП
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno4.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Вафельное полотно
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/byaz1.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2 </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/byaz2.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 100 гр/м2 </span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Бязь
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/sitets.jpg" width="50" alt="">
              <span>Ситец мадапалам отбеленный ширина 80см, длина 100м. 70 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Ситец
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/venik1.jpg" width="50" alt="">
              <span>Веник сорго-щётка 3-х лучевой 220-280 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik2.jpg" width="50" alt="">
              <span>Веник сорго трёх прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik3.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 400-500 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik4.jpg" width="50" alt="">
              <span>Веник сорго_молдавский двух прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik5.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik6.jpg" width="50" alt="">
              <span>Метла сорго 350-450 гр. В связке по 12 шт.</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Веник сорго
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno1.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 50 м </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno2.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 60 м</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno3.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 0.75 м, длина 50 м</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Нетканое полотно ХПП
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno4.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Вафельное полотно
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/byaz1.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2 </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/byaz2.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 100 гр/м2 </span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Бязь
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/sitets.jpg" width="50" alt="">
              <span>Ситец мадапалам отбеленный ширина 80см, длина 100м. 70 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Ситец
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/venik1.jpg" width="50" alt="">
              <span>Веник сорго-щётка 3-х лучевой 220-280 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik2.jpg" width="50" alt="">
              <span>Веник сорго трёх прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik3.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 400-500 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik4.jpg" width="50" alt="">
              <span>Веник сорго_молдавский двух прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik5.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik6.jpg" width="50" alt="">
              <span>Метла сорго 350-450 гр. В связке по 12 шт.</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Веник сорго
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno1.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 50 м </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno2.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 60 м</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno3.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 0.75 м, длина 50 м</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Нетканое полотно ХПП
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno4.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Вафельное полотно
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/byaz1.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2 </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/byaz2.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 100 гр/м2 </span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Бязь
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/sitets.jpg" width="50" alt="">
              <span>Ситец мадапалам отбеленный ширина 80см, длина 100м. 70 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Ситец
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/venik1.jpg" width="50" alt="">
              <span>Веник сорго-щётка 3-х лучевой 220-280 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik2.jpg" width="50" alt="">
              <span>Веник сорго трёх прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik3.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 400-500 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik4.jpg" width="50" alt="">
              <span>Веник сорго_молдавский двух прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik5.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik6.jpg" width="50" alt="">
              <span>Метла сорго 350-450 гр. В связке по 12 шт.</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Веник сорго
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno1.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 50 м </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno2.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 1.5 м, длина 60 м</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/polotno3.jpg" width="50" alt="">
              <span>Нетканое полотно ширина 0.75 м, длина 50 м</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Нетканое полотно ХПП
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/polotno4.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Вафельное полотно
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/byaz1.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 110 гр/м2 </span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/byaz2.jpg" width="50" alt="">
              <span>Бязь отбеленная ширина 1.5 м., длина 100 м. 100 гр/м2 </span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Бязь
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/sitets.jpg" width="50" alt="">
              <span>Ситец мадапалам отбеленный ширина 80см, длина 100м. 70 гр/м2</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Ситец
          </button>
        </div>
        <div class="menu-dropdown">
          <div class="menu-contents">
            <a href="#">
              <img class="image" src="/assets/site/venik1.jpg" width="50" alt="">
              <span>Веник сорго-щётка 3-х лучевой 220-280 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik2.jpg" width="50" alt="">
              <span>Веник сорго трёх прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik3.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 400-500 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik4.jpg" width="50" alt="">
              <span>Веник сорго_молдавский двух прошивной 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik5.jpg" width="50" alt="">
              <span>Веник сорго 3-х лучевой 300-350 гр. В связке по 50 шт.</span>
            </a>
            <a href="#">
              <img class="image" src="/assets/site/venik6.jpg" width="50" alt="">
              <span>Метла сорго 350-450 гр. В связке по 12 шт.</span>
            </a>
          </div>
          <button class="dropdown-buttons">
            Веник сорго
          </button>
        </div>
      </div>
    </div>
    <div class="bodying">
      <div v-for="(product, key) in products" :key="key" class="card">
        <div class="card-image">
          <img class="imaging" :src="product.image_url" width="99" alt="">
        </div>
        <div class="card-title">
          {{ product.title }}
        </div>
        <div class="card-price">
          {{ `${product.price} ${product.currency}` }}
        </div>
        <div class="card-button">
          <button>ПОДРОБНО</button>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
    </route>

<style>
.page {
  display: flex;
  width: 100% !important;
  /* border: 1px solid gainsboro; */
  padding: 5px;
  /* margin: 0 5px; */
}
.card:hover {
  scale: 1.003;
  box-shadow: 0px 8px 16px 0px rgba(17, 16, 16, 0.2);;
  transition: all 0.5s;
  border: none;
  cursor: pointer;
}
.card {
  max-width: 100%;
  max-height: 100%;
  background-color: #f9f9f9;
  justify-content: center;
  display: block;
  align-items: center;
  padding: 10px;
  border: 1px solid gainsboro;
}
.card-image {
  width: 96%;
  margin-left: 2%;
}

.card:hover >.card-image {
  scale: 1.05;
  transition: all 0.4s;
}

.card-title {
  width: 75%;
  margin-left: 12.5%;
  text-align: center;
  font-size: 14px;
  font-weight: 200;
  font-family: sans-serif;
  margin-top: 10px;
}
.card-price {
  width: 75%;
  margin-left: 12.5%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  margin-top: 10px;
}
.card-button {
  width: 70%;
  margin-left: 15%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  border: 1px solid black;
  margin-top: 15px;
  margin-bottom: 10px;
}

.card-button:hover {
  border: 1px solid orangered;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  background-color: orangered;
}

.bodying {
  display: grid;
  grid-template-columns: 256px 256px 256px 256px;
  grid-template-rows: 450px 450px;
  grid-gap: 0;
  width: 70% !important;
  position: relative;
  /* border: 1px solid gainsboro; */
  /* margin-left: 10%; */
  padding: 5px;
}
.imaging {
  margin: 0 15px 0 0;
  width: 99%;
}
.heading {
    position: relative;
    width: 100%;
    padding-left: 3%;
    height: 90px;
    display: flex;
    align-items: center;
}
.title {
    /* position: absolute; */
    font-size: 30px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    color: black;
    width: 30%;
    height: 30%;
    text-align: left;
}
.sidebar {
    /* margin-top: 20px; */
    width: 27%;
    margin-right: 1%;
    margin-left: 2%;
    /* border: 1px solid gainsboro; */
    padding: 10px;
}
.sidebar-buttons {
    display: block;
    background-color: black;
}
.dropdown-buttons {
  background-color: #fff;
  color: black;
  padding: 16px;
  /* width: 100%; */
  font-weight: 900;
  font-family: 'Times New Roman', Times, serif;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-buttons:hover {
    cursor: pointer;
    color: red;
    transform: scaleX(1.01);
    transform: scaleY(1.01);
    z-index: 10;
    transition: all 0.1s;
}

.menu-dropdown {
    position: relative;
    display: flex;
    width: 100%;
    background-color: white;
    border-width: 0.5px 1px 0.1px 1px;
    border-style: solid;
    border-color: gainsboro;
}

.menu-dropdown:hover {
    cursor: pointer;
    transform: scaleX(1.01);
    color: red;
    transition: all 0.1s;
    z-index: 10;
    border-left: 5px solid red;
}
.menu-contents:hover ~ .dropdown-buttons{
    color: red !important;
}
.menu-contents {
  display: none;
  position: absolute;
  right: -280%;
  top: 0;
  background-color: #f9f9f9;
  width: 280%;
  box-shadow: 0px 8px 16px 0px rgba(17, 16, 16, 0.2);
  z-index: 3;
  padding: 10px;
}

.menu-contents a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  margin: 5px 0;
  display: flex;
  align-items: center;
  font-weight: 900;
  font-family: 'Times New Roman', Times, serif;
  transition: all 0.2s;
}

.menu-contents a:hover {
    color: red
}

.menu-dropdown:hover .menu-contents {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  border: 1px solid gainsboro;
  grid-gap: 15px;
  padding: 10px;
}

.menu-dropdown:hover .dropdown-buttons {
  background-color: white;
}

.image {
  margin-right: 10px;
}
</style>

