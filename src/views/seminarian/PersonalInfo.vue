<script setup></script>

<template>
  <div class="grid mt-10">
    <div>
      <button
        class="w-[120px] bg-[#061c82] text-[15px] font-black mx-auto mt-5 py-2 px-7 rounded text-white float-right"
      >
        Edit
      </button>
    </div>
    <div class="flex justify-between">
      <div class="grid w-[40%] mt-[12px]">
        <label for="" class="text-[15px] font-bold text-[#343434]">First Name</label>
        <input
          type="text"
          class="bg-[#F8F8F8] border-b-2 rounded outline-0 mt-[12px] placeholder:text-sm"
          placeholder="Ogbu"
        />
      </div>
      <div class="grid w-[40%] mt-[12px]">
        <label for="" class="text-[15px] font-bold text-[#343434]">Last Name</label>
        <input
          type="text"
          class="bg-[#F8F8F8] border-b-2 rounded outline-0 mt-[12px] placeholder:text-sm"
          placeholder="Mitchel"
        />
      </div>
    </div>
    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Email</label>

      <input
        type="text"
        class="bg-[#F8F8F8] border-b-2 mt-[12px] outline-0 placeholder:text-sm"
        placeholder="oogbu@gmail.com"
      />
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Date of Birth</label>

      <input
        type="text"
        class="bg-[#F8F8F8] border-b-2 mt-[12px] outline-0 placeholder:text-sm"
        placeholder="02/10/2003"
      />
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Parish</label>

      <input
        type="text"
        class="bg-[#F8F8F8] border-b-2 mt-[12px] outline-0 placeholder:text-sm"
        placeholder="St Denis, Bariga"
      />
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Seminary</label>

      <input
        type="text"
        class="bg-[#F8F8F8] border-b-2 mt-[12px] outline-0 placeholder:text-sm"
        placeholder="St. John Of The Cross, Ekpoma"
      />
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Department</label>

      <input
        type="text"
        class="bg-[#F8F8F8] border-b-2 mt-[12px] outline-0 placeholder:text-sm"
        placeholder="Philosophy"
      />
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Class</label>

      <input
        type="text"
        class="bg-[#F8F8F8] border-b-2 mt-[12px] outline-0 placeholder:text-sm"
        placeholder="Philosophy 3"
      />
    </div>

    <button
      class="w-[200px] bg-[#061c82] text-[15px] font-black mt-12 py-2 px-7 rounded text-white"
    >
      Save Changes
    </button>
  </div>
</template>

<style scoped></style>
