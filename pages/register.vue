<template>
  <Head><Title>Product Editor Register an Account</Title></Head>

  <div class="flex justify-center bg-cyan-900 text-white" id="skip">
    <a href="#signUp" class="underline border-0">Sign Up as a new user</a>
  </div>
  <div class="flex justify-center bg-cyan-900 text-white" id="skip">
    <a href="/" class="underline border-0">Login as a user</a>
  </div>
  <div class="grid grid-cols-9 h-[100vh]">
    <div class="w-full bg-white z-0 col-span-4">
      <div class="flex text-black m-3 mb-0">
        <Logo />
      </div>
      <div class="h-[88%] flex items-center justify-center">
        <div class="w-[80%]">
          <div class="w-full">
            <p
              class="text-[45px] font-bold text-slate-600"
              tabindex="0"
              id="signUp"
            >
              Create a New Account
            </p>
            <div class="grid grid-cols-2 gap-2">
              <IconTextField
                id="first"
                label="First Name"
                fieldIcon="user"
                fieldPlaceholder="First Name"
                fieldType="text"
                :required="true"
              />
              <IconTextField
                id="middle"
                label="Middle Name"
                fieldIcon="user"
                fieldPlaceholder="Middle Name"
                fieldType="text"
              />
              <IconTextField
                id="last"
                label="Last Name"
                fieldIcon="user"
                fieldPlaceholder="Last Name"
                fieldType="text"
                :required="true"
              />
              <IconTextField
                id="username"
                label="Username"
                fieldIcon="user"
                fieldPlaceholder="Username"
                fieldType="text"
                :required="true"
              />
            </div>
            <IconTextField
                id="email"
                label="Email"
                :required="true"
                fieldIcon="envelope"
                fieldPlaceholder="Email"
                fieldType="text"
              />
              <IconTextField
                id="password"
                label="Password"
                :required="true"
                fieldIcon="unlock"
                fieldPlaceholder="Password"
                fieldType="password"
              />
            <IconTextField
                id="confirm"
                label="Confirm Password"
                :required="true"
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
                    :class="active === 'superAdmin' ? 'bg-cyan-200' : ''"
                    @click="active = 'superAdmin'"
                  >
                    Super Admin
                  </button>
                  <button
                    class="flex items-center h-10 w-full border-black border rounded-lg m-2 grid hover:cursor-pointer hover:bg-cyan-100 hover:border-cyan-200 bg-slate-100 border-slate-100"
                    :class="active === 'HR' ? 'bg-cyan-200' : ''"
                    @click="active = 'HR'"
                  >
                    Human Resource
                  </button>
                  <button
                    class="flex items-center h-10 w-full border-black border rounded-lg m-2 grid hover:cursor-pointer hover:bg-cyan-100 hover:border-cyan-200 bg-slate-100 border-slate-100"
                    :class="active === 'content' ? 'bg-cyan-200' : ''"
                    @click="active = 'content'"
                  >
                    Content Admin
                  </button>
                  <button
                    class="flex items-center h-10 w-full border-black border rounded-lg m-2 grid hover:cursor-pointer hover:bg-cyan-100 hover:border-cyan-200 bg-slate-100 border-slate-100"
                    :class="active === 'academic' ? 'bg-cyan-200' : ''"
                    @click="active = 'academic'"
                  >
                    Academic
                  </button>
                  <button
                    class="flex items-center h-10 w-full border-black border rounded-lg m-2 grid hover:cursor-pointer hover:bg-cyan-100 hover:border-cyan-200 bg-slate-100 border-slate-100"
                    :class="active === 'educ' ? 'bg-cyan-200' : ''"
                    @click="active = 'educ'"
                  >
                    Education
                  </button>
                  <button
                    class="flex items-center h-10 w-full border-black border rounded-lg m-2 grid hover:cursor-pointer hover:bg-cyan-100 hover:border-cyan-200 bg-slate-100 border-slate-100"
                    :class="active === 'english' ? 'bg-cyan-200' : ''"
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
      class="loginBg rounded-l-lg z-10 flex col-span-5"
    >
      <div class="flex justify-center items-center h-full w-full">
        <div class="text-white z-20 w-full">
          <h1 class="text-center text-[70px] font-bold">Welcome Back!</h1>
          <p class="text-center">
            Enter your credentials and continue your journey with us!
          </p>
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
