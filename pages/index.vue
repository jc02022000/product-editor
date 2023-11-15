<template>
  <Head>
    <Title>Product Access Editor Login</Title>
  </Head>
  <div class="flex justify-center bg-cyan-900 text-white" id="skip">
    <a href="#signIn" class="underline border-0">Login as a user</a>
  </div>
  <div class="flex justify-center bg-cyan-900 text-white" id="skip">
    <a href="/register" class="underline border-0">Sign Up as a new user</a>
  </div>
  <div class="grid grid-cols-9 h-[100vh]">
    <div
      class="h-auto w-full bg-[url('@/assets/img/bg1.jpg')] bg-cover bg-right-top rounded-r-lg z-10 col-span-5"
    >
      <div
        class="h-full absolute w-[55.5%] bg-black rounded-r-lg opacity-30 z-10"
      ></div>
      <div class="w-full h-full z-20">
        <div class="flex text-white m-3">
          <Logo />
        </div>
        <div class="flex justify-center items-center">
          <div class="text-white z-20 mt-[20%]">
            <h1
              class="text-center text-[70px] font-bold"
              tabindex="0"
              id="signUp"
            >
              New Here?
            </h1>
            <p class="text-center" tabindex="0">
              Sign Up and Discover a great amount of new opportunities!
            </p>
            <div class="flex justify-center">
              <button
                class="w-[150px] text-sm rounded-full bg-white text-black p-2 font-bold mt-16"
                @click="register"
                tabindex="0"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-full w-full flex items-center justify-center bg-white z-0 col-span-4"
    >
      <div class="w-[50%]">
        <p
          class="text-[45px] font-bold text-slate-600"
          id="signIn"
          tabindex="0"
        >
          Sign In
        </p>
        <IconTextField
          id="email"
          label="Username or Email"
          fieldIcon="user"
          fieldPlaceholder="Username or Email"
          fieldType="text"
          :required="true"
        />
        <IconTextField
          id="password"
          label="Password"
          fieldIcon="lock"
          fieldPlaceholder="Password"
          fieldType="password"
          :required="true"
        />
        <div class="ml-2 mt-2">
          <div class="mr-2">
            <a href="#" class="text-sm underline text-[#250FFF]"
              >Forgot Password?</a
            >
          </div>
        </div>
        <div class="flex justify-center w-full">
          <button
            class="w-full h-12 text-base rounded-full gradientButton text-white p-2 font-bold mt-16"
            @click="login"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  props: {
    admin: {
      type: Boolean,
    },
  },
  methods: {
    register() {
      navigateTo("/register");
    },
    login() {
      navigateTo("/products");
    },
  },
});
</script>
