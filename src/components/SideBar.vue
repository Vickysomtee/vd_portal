<script setup></script>

<template>
  <main class="fixed z-10 w-[250px] bg-[#061C82] py-[30px] px-[20px] h-screen">
    <img class="w-[150px]" src="@/assets/banner.svg" alt="" />
    <ul class="mt-14">
      <li class="flex w-full bg-[#3858e4] py-3 pl-2 rounded-md">
        <img src="@/assets/icons/dashboard.svg" alt="" />
        <p class="relative top-px left-2.5 left text-white font-black text-[14px]">Dashbord</p>
      </li>
      <li class="flex w-full py-3 pl-2 mt-4 rounded-md">
        <img src="@/assets/icons/seminarians.svg" alt="" />
        <p class="relative top-px left-2.5 left text-white font-black text-[14px]">Seminarians</p>
      </li>
    </ul>

    <div class="flex w-full py-3 pl-2 mt-[300px] rounded-md">
        <img src="@/assets/icons/logout.svg" alt="" />
        <p class="relative top-px left-2.5 left text-white font-black text-[15px]">Logout</p>
    </div>
  </main>
</template>

<style scoped></style>

