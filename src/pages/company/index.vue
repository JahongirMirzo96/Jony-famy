<template>
  <div class="heading-company">
    <span class="heading-title">
      O kompani
    </span>
  </div>
  <div class="body-company">
    <div class="news-box">
      <div class="news-title">
        Novosti
      </div>
      <div v-for="(i, key) in 6" :key="i + key" class="news-card">
        <div class="news-card-transition-element" />
        <a href="#" class="news-card-text">
          <div class="news-card-date">
            12/12/2022
          </div>
          Наши отгрузки: отопительное оборудование. Наши отгрузки: ленточные пилы.
        </a>
      </div>
    </div>
    <div class="about-company-box">
      <div class="about-company-box-card">
        <div class="about-company-box-card-title">
          Kendin hazirladin yavas yavas sonini
        </div>
        <div class="about-company-box-card-body">
          <img src="/assets/site/venik6.jpg" width="150" alt="">
          <div class="about-company-boxcard-body-text">
            Atesi seviyorum gonlum alxev alev
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
        </route>

<style lang="scss" scoped>
.heading-company {
    position: relative;
    width: 100%;
    padding-left: 3%;
    height: 90px;
    display: flex;
    align-items: center;
}

.heading-title {
    font-size: 30px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    color: black;
    width: 30%;
    height: 30%;
    text-align: left;
}

.body-company {
    display: flex;
    width: 100%;
    padding: 5px;
}

.news-box {
    width: 27%;
    margin-right: 1%;
    margin-left: 2%;
    padding: 10px;
}

.news-title {
    border-top: 1px solid gainsboro;
    border-right: 1px solid gainsboro;
    border-left: 1px solid gainsboro;
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    text-align: center;
    padding: 10px;
    font-weight: bold;
}

.news-card {
    border-left: 1px solid gainsboro;
    border-right: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
    padding: 10px;
    position: relative;
    &:before {
    position: absolute;
	left: 0;
	bottom: 0;
	content: "";
	display: block;
	width: 2px;
	height: 100%;
	background-color: red;
	transform-origin: 0 bottom 0;
	transform: scaleY(0);
	transition: .4s ease-out;
}

}

/* .transition-element {
    display: none;
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    bottom: 0;
}

.news-card:hover > .transition-element {
    display: block;
    height: 2px;
    transform: scaleY(100);
    width: 2px;
    background-color: red;
    transition: width 0.5s;
} */

.news-card-date {
    color: grey;
    font-size: 12px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 300;
    text-align: end;
    padding: 10px;
}

.news-card-text {
    color: black;
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 600;
    text-decoration: none;
    padding: 10px;
}

.news-card-text:hover {
    color: red;
}
</style>
