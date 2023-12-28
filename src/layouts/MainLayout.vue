<template>
  <div>
    <SideBar/>
    <div class="ml-[250px]">
        <NavBar/>
       <div class="px-[40px] pt-[30px] mb-[65px]">
        <h1 class="text-[#061C82] text-[22px] font-bold mb-[40px]">{{ title }}</h1>
        <slot></slot>
       </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import SideBar from './SideBar.vue';
export default {
    components: { NavBar, SideBar },
    props: {
    title: String,
    total: Number,
  }
}
</script>

<style>

</style>