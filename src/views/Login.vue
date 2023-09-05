<script setup></script>

<template>
  <main>
    <div class="contain">
      <div class="descrip">
        <img src="../assets/logo.png" alt="" srcset="" />
        <h1>Directorate Of Vocation</h1>
      </div>
      <button class="btn">Log in</button>
    </div>
  </main>
</template>

<style scoped>
/* body {
    height: 100vh;
} */
main {
  background-image: url('@/assets/bg.svg');
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.contain {
  width: 470px;
  display: grid;
}

.descrip {
  display: flex;
  justify-content: space-between;
}

img {
    width: 200px;
}

h1 {
  color: white;
  font-size: 45px;
  font-weight: bold;
  width: 250px;
  padding-top: 30px;

}

.btn {
  background-color: white;
  color: #061c82;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  width: 120px;
  padding: 12px 20px;
  margin: 20px auto 0;
}
</style>
