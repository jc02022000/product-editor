<template>
  <Head>
    <Title>Product Access Editor Login</Title>
  </Head>
  <div class="flex justify-center bg-cyan-900 text-white" id="skip" lang="EN">
    <a href="#signIn" class="underline border-0">Login as a user</a>
  </div>
  <div class="flex justify-center bg-cyan-900 text-white" id="skip" lang="EN">
    <a href="/register" class="underline border-0">Sign Up as a new user</a>
  </div>
  <div class="grid grid-cols-9 h-[100vh]" lang="EN">
    <div
      class="loginBg rounded-r-lg z-10 col-span-5"
    >
      <!-- <div
        class="h-full absolute w-[55.5%] bg-black rounded-r-lg opacity-40 z-10"
      ></div> -->
      <div class="w-full h-full z-20">
        <div class="flex text-white m-3">
          <Logo />
        </div>
        <div class="flex justify-center items-center">
          <div class="text-white z-20 mt-[20%]">
            <h1 class="text-center text-[70px] font-bold" id="signUp">
              New Here?
            </h1>
            <p class="text-center">
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
        <h1
          class="text-[45px] font-bold text-slate-600"
          id="signIn"
          tabindex="0"
        >
          Sign In
      </h1>
        <fieldset id="error"
          tabindex="0"
          class="border-red-600 border-[0.5px] rounded-lg flex justify-center p-5 bg-red-200"
          v-if="this.v$.$error">
          <legend class="font-bold text-red-900">Errors have Occured</legend>
       
          <ol class="list-disc text-sm">
            <li v-if="emailRequired">
              Email is Required. Field cannot be empty.
            </li>
            <li v-if="passwordRequired">
              Password is Required. Field cannot be empty.
            </li>
            <li v-if="notMatch">Password or Email is Incorrect.</li>
          </ol>
      </fieldset>
        <IconTextField
          id="email"
          label="Username or Email"
          fieldIcon="user"
          fieldPlaceholder="Username or Email"
          fieldType="text"
          :required="true"
          v-model="email"
          :error="emailRequired"
        />
        <IconTextField
          id="password"
          label="Password"
          fieldIcon="lock"
          fieldPlaceholder="Password"
          fieldType="password"
          :required="true"
          v-model="password"
          :error="passwordRequired || notMatch"
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
            @click.prevent="login(event)"
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
import useValidate from "@vuelidate/core";
import { required, email, sameAs, minLength } from "@vuelidate/validators";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      v$: useValidate(),
      emailRequired: false,
      passwordRequired: false,
      notMatch: false,
    };
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
    async login(event) {
      // navigateTo("/products");
      this.emailRequired = false;
      this.passwordRequired = false;
      this.notMatch = false;

      await this.v$.$validate();
      if (this.v$.$error) {
        this.v$.$errors.forEach((item) => {
          if (item.$property === "email" && item.$validator === "required") {
            this.emailRequired = true;
          } else if (item.$property === "password" && item.$validator === "required") {
            this.passwordRequired = true;
          } else if (item.$validator === "sameAs") {
            this.notMatch = true;
          } 
        });
        document.getElementById("error").focus();
      } else {
        navigateTo('/products')
      }

      console.log(this.v$.$errors);
    },
  },
  validations() {
    return {
      email: { required, email },
      password: {
        required,
        minLength: minLength(6),
        sameAs: sameAs("password123"),
      },
    };
  },
});
</script>
