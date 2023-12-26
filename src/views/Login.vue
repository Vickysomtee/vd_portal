<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import DotLoader from 'vue-spinner/src/DotLoader.vue'
import Api from '../Api'

const router = useRouter()
const store = useStore()
const toast = useToast()

const email = ref('')
const password = ref('')
let isLogin = ref(false)

const login = async (e) => {
  e.preventDefault()

  if (!email.value || !password.value) {
    toast.error('Fill in the required input')
    return
  }

  try {
    isLogin.value = true

    const { data } = await Api().post('auth/login', {
      email: email.value,
      password: password.value
    })

    store.dispatch('auth/setToken', data.access_token)
    isLogin.value = false

    router.push({ name: 'dashboard' })
  } catch (error) {
    isLogin.value = false
    if (error) toast.error(error.response.data.message)
  }
}
</script>

<template>
  <main class="flex justify-between h-screen">
    <section class="banner">
      <img
        class="w-[170px] relative top-[50px] left-[110px]"
        src="../assets/banner.svg"
        alt=""
        srcset=""
      />
    </section>
    <section class="w-[60%] bg-white py-[60px] px-[100px]">
      <div>
        <h1 class="text-[25px] text-[#061C82] font-black">Log In</h1>
        <p class="text-[#343434]">Login to your account</p>
      </div>
      <form action="" class="mt-[80px]">
        <div class="grid">
          <label class="text-[17px] text-[#061C82] font-black" for="email">Email Address</label>
          <input
            type="text"
            v-model="email"
            placeholder="Enter your email address"
            class="bg-[#EBEBEB] rounded h-[50px] mt-[12px] pl-[20px]"
          />
        </div>
        <div class="grid mt-[40px]">
          <label class="text-[17px] text-[#061C82] font-black" for="password">Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="Enter your password"
            class="bg-[#EBEBEB] rounded h-[50px] mt-[12px] pl-[20px]"
          />
        </div>
        <button
          class="bg-[#061C82] text-white font-black w-full mt-[50px] py-[12px] rounded-md text-[17px]"
          @click="login"
          :disabled="isLogin"
        >
          <div v-if="isLogin">
            <dot-loader
              :loading="true"
              :color="'#fff'"
              :size="'25px'"
              :class="'flex justify-around'"
            />
          </div>
          <div v-else>Log In</div>
        </button>
      </form>
    </section>
  </main>
</template>

<style scoped>
.banner {
  background-image: url('@/assets/login.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 40%;
}
</style>
