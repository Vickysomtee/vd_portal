<template>
  <div>
    <SideBar/>
    <div class="ml-[250px]">
        <NavBar/>
       <div class="pl-[40px] pt-[40px]">
        <slot></slot>
       </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../NavBar.vue';
import SideBar from '../SideBar.vue';
export default {
    components: { NavBar, SideBar }
}
</script>

<style>

</style>