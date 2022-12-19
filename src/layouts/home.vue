<template>
  <main class="main">
    <div class="body">
      <Header />
      <RouterView />
    </div>
  </main>
</template>

<style>
.main {
  position: absolute;
  padding: 0 10%;
  width: 100%;
  /* height: 100%; */
  background-color: rgb(223, 221, 221);
}
.body {
  /* height: 100%; */
  width: 100%;
  background-color: white;
  padding-top: 50px;
}
</style>
