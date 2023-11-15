<template>

<Head><Title>Register A New Account</Title></Head>
  <div class="grid grid-cols-9 h-[100vh]">
    <div class="w-full bg-white z-0 col-span-4">
      <div id="signUpSkip">
        <a href="#signUp">Sign Up as a new user</a>
      </div>
      <div id="skip">
        <a href="/">Login as a user</a>
      </div>
      <div class="flex text-black m-3 mb-0">
        <Logo />
      </div>
      <div class="h-[90%] flex items-center justify-center">
        <div class="w-[70%]">
          <div class="w-full">
            <p
              class="text-[45px] font-bold text-slate-600"
              tabindex="0"
              id="signUp"
            >
              Create a New Account
            </p>
            <IconTextField
              fieldIcon="user"
              fieldPlaceholder="Username"
              fieldType="text"
            />
            <IconTextField
              fieldIcon="envelope"
              fieldPlaceholder="Email"
              fieldType="text"
            />
            <IconTextField
              fieldIcon="unlock"
              fieldPlaceholder="Password"
              fieldType="password"
            />
            <IconTextField
              fieldIcon="unlock-keyhole"
              fieldPlaceholder="Confirm Password"
              fieldType="password"
            />
            <div class="ml-2 mt-5">
              <fieldset>
                <legend>Choose an Account type:</legend>
                <div
                  class="place-items-center grid grid-cols-2 gap-x-2 gap-y-0"
                >
                  <button
                    class="flex items-center h-10 w-full border-black border rounded-lg m-2 grid hover:cursor-pointer hover:bg-cyan-100 hover:border-cyan-200 bg-slate-100 border-slate-100"
                    :class="active === 'superAdmin' ? 'bg-cyan-300' : ''"
                    @click="active = 'superAdmin'"
                  >
                    Super Admin
                  </button>
                  <button
                    class="flex items-center h-10 w-full border-black border rounded-lg m-2 grid hover:cursor-pointer hover:bg-cyan-100 hover:border-cyan-200 bg-slate-100 border-slate-100"
                    :class="active === 'HR' ? 'bg-cyan-300' : ''"
                    @click="active = 'HR'"
                  >
                    Human Resource
                  </button>
                  <button
                    class="flex items-center h-10 w-full border-black border rounded-lg m-2 grid hover:cursor-pointer hover:bg-cyan-100 hover:border-cyan-200 bg-slate-100 border-slate-100"
                    :class="active === 'content' ? 'bg-cyan-300' : ''"
                    @click="active = 'content'"
                  >
                    Content Admin
                  </button>
                  <button
                    class="flex items-center h-10 w-full border-black border rounded-lg m-2 grid hover:cursor-pointer hover:bg-cyan-100 hover:border-cyan-200 bg-slate-100 border-slate-100"
                    :class="active === 'academic' ? 'bg-cyan-300' : ''"
                    @click="active = 'academic'"
                  >
                    Academic
                  </button>
                  <button
                    class="flex items-center h-10 w-full border-black border rounded-lg m-2 grid hover:cursor-pointer hover:bg-cyan-100 hover:border-cyan-200 bg-slate-100 border-slate-100"
                    :class="active === 'educ' ? 'bg-cyan-300' : ''"
                    @click="active = 'educ'"
                  >
                    Education
                  </button>
                  <button
                    class="flex items-center h-10 w-full border-black border rounded-lg m-2 grid hover:cursor-pointer hover:bg-cyan-100 hover:border-cyan-200 bg-slate-100 border-slate-100"
                    :class="active === 'english' ? 'bg-cyan-300' : ''"
                    @click="active = 'english'"
                  >
                    English
                  </button>
                </div>
              </fieldset>
            </div>
            <div class="flex justify-center w-full">
              <button
                class="w-full h-12 text-base rounded-full gradientButton text-white p-2 font-bold mt-4"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-full w-full bg-[url('@/assets/img/bg1.jpg')] bg-cover bg-right-top rounded-l-lg z-10 flex col-span-5"
    >
      <!-- <div
        class="h-full absolute bg-black rounded-r-lg opacity-30 z-10"
      ></div> -->
        <div class="flex justify-center items-center h-full w-full">
          <div class="text-white z-20 w-full">
            <h1 class="text-center text-[70px] font-bold">Welcome Back!</h1>
            <p class="text-center">Enter your credentials and continue your journey with us!</p>
            <div class="flex justify-center">
              <button
                class="w-[150px] text-sm rounded-full bg-white text-black p-2 font-bold mt-16"
                @click="login"
                id="signIn"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      active: "",
    };
  },
  methods: {
    login() {
      navigateTo("/");
    },
  },
});
</script>
