
<template>
  <main>
    <div class="grid w-[470px]">
      <img class="w-[450px] mx-auto" src="../assets/banner.svg" alt="" srcset="" />
      <router-link to="/login" class="mx-auto my-0">
        <button
        class="w-[120px] bg-white text-[15px] font-black mt-5 py-2 rounded text-[#061c82]"
      >
        Log in
      </button>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
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
</style>
