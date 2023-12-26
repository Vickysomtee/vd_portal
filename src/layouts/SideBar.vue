<script setup></script>

<template>
  <main
    class="fixed z-10 w-[250px] bg-[#061C82] py-[30px] px-[20px] h-screen text-white font-black"
  >
    <img class="w-[150px]" src="@/assets/banner.svg" alt="" />
    <ul class="mt-14">
      <router-link to="/dashboard" class="flex w-full py-3 pl-2 rounded-md">
        <li class="flex">
          <img src="@/assets/icons/dashboard.svg" alt="" />
          <p class="relative top-px left-2.5 left text-[14px]">Dashboard</p>
        </li>
      </router-link>

      <router-link to="/seminarians" class="flex w-full py-3 pl-2 mt-4 rounded-md">
        <li class="flex">
          <img src="@/assets/icons/seminarians.svg" alt="" />
          <p class="relative top-px left-2.5 left text-[14px]">Seminarians</p>
        </li>
      </router-link>
    </ul>

    <div class="flex w-full py-3 pl-2 mt-[300px] rounded-md">
      <img src="@/assets/icons/logout.svg" alt="" />
      <p class="relative top-px left-2.5 left text-[15px]">Logout</p>
    </div>
  </main>
</template>

<style scoped>
a.router-link-active {
  background-color: #3858e4;
}
</style>
