<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="head">
    <div class="logo" flex>
      <Icon class="menu-icon" mx-4 color-white text-32px icon="material-symbols:menu" />
      <!-- <div class="catalog">
        Katalog
      </div> -->
    </div>
    <div class="buttons">
      <div class="dropdown">
        <router-link to="/categories">
          <button class="dropbtn">
            Katalog
          </button>
        </router-link>
      </div>
      <div class="dropdown">
        <router-link to="/company">
          <button class="dropbtn">
            Kompaniya
          </button>
        </router-link>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          Xizmatlar
        </button>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          Yangiliklar
        </button>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          Biz haqimizda
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.menu-icon:hover {
  cursor: pointer;
}
.logo {
    width: 10%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.buttons {
    width: 90%;
}
.head {
    width: 100%;
    margin: 0 auto;
    height: 60px;
    border: 2px solid rgb(212, 1, 1);
    background-color: rgb(212, 1, 1);
    align-items: center;
    display: flex;
    justify-content:  space-evenly;
}
.dropbtn {
  background-color: rgb(212, 1, 1);
  color: white;
  min-height: 100%;
  width: 250px;
  font-weight: 900;
  padding: 17px 0px 17px 0px;
  font-size: 14px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: width 2s;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin: 2px 5px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #bbb7b7;
  min-width: 150%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  transition: width 2s;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  transition: width 2s;
  display: inline;
}

.dropdown:hover .dropbtn {
    background-color: rgb(253, 30, 30);
  border-top: 4px solid white;
  padding: 13px 17px 17px 17px;
  color: white;
}
</style>
