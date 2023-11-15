<template>
  <div
    class="float-left h-full absolute w-3/5 bg-[url('@/assets/img/bg1.jpg')] bg-cover bg-right-top rounded-r-lg z-10 flex"
  >
    <Head>
      <Title>Product Access Editor Login</Title>
    </Head>
    <div
      class="h-full absolute w-full bg-black rounded-r-lg opacity-30 z-10"
    ></div>
    <div class="absolute w-full h-full z-20">
      <div class="flex text-white m-3">
        <div id="skip">
          <a href="#signIn" >Login as a user</a>
        </div>
        <div id="signUpSkip">
          <a href="/register">Sign Up as a new user</a>
        </div>
        <Logo />
      </div>
      <div class="flex justify-center h-[80%]">
        <div class="text-white z-20 mt-[20%]" >
          <h1 class="text-center text-[70px] font-bold" tabindex="0" id="signUp">
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
    class="float-right h-full absolute w-3/6 right-0 flex items-center justify-center bg-white z-0"
  >
    <div class="w-3/6 ml-[150px]">
      <p class="text-[45px] font-bold text-slate-600" id="signIn" tabindex="0">Sign In </p>
      <IconTextField
        fieldIcon="user"
        fieldPlaceholder="Username or Email"
        fieldType="text"
      />
      <IconTextField
        fieldIcon="lock"
        fieldPlaceholder="Password"
        fieldType="password"
      />
      <div class="ml-2 mt-2">
        <div class="mr-2">
          <a href="#" class="text-sm underline text-cyan-500">Forgot Password?</a>
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
