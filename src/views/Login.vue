<script setup></script>

<template>
  <main class="flex justify-between h-screen">
    <section class="banner">
      <img class="w-[170px] relative top-[50px] left-[110px]" src="../assets/banner.svg" alt="" srcset="" />
    </section>
    <section class="w-[60%] bg-white py-[60px] px-[100px]">
      <div>
        <h1 class="text-[25px] text-[#061C82] font-black">Log In</h1>
        <p class="text-[#343434]">Login to your account</p>
      </div>
      <form action="" class="mt-[80px]">
        <div class="grid">
          <label class="text-[17px] text-[#061C82] font-black" for="email">Email Address</label>
          <input type="text" class="bg-[#EBEBEB] rounded h-[50px] mt-[12px]" />
        </div>
        <div class="grid mt-[40px]">
          <label class="text-[17px] text-[#061C82] font-black" for="email">Password</label>
          <input type="text" class="bg-[#EBEBEB] rounded h-[50px] mt-[12px]" />
        </div>
        <button class="bg-[#061C82] text-white font-black w-full mt-[50px] py-[12px] rounded-md">
          Log In
        </button>
      </form>
    </section>
  </main>
</template>

<style scoped>
/* main {
  height: 100vh;
   display: flex;
  justify-content: space-between; 
} */
.banner {
  background-image: url('@/assets/login.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 40%;
}
</style>
