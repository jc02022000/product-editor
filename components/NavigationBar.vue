<template>
  <div>
    <div class="flex justify-center bg-cyan-900 text-white" id="skip" >
      <a href="#content" class="underline border-0" :tabindex="this.open ? -1 : 0">Skip to Main Content</a>
    </div>
    <div class="h-[90px] w-full sticky top-0 left-0 bg-[#323e53] flex">
      <div class="mt-2">
        <div
          class="h-[70px] w-[70px] bg-[#f9f7f7] rounded-[20%] grid justify-center place-items-center ml-8 logoShadow"
        >
          <img
            src="https://seeklogo.com/images/U/university-of-cambridge-logo-E6ED593FBF-seeklogo.com.png"
            width="50%"
            height="80%"
            alt="Cambridge University Press and Assessment Logo"
          />
          <p class="font-serif mb-0 mt-0 text-[11px] text-black">CAMBRIDGE</p>
          <p class="mt-0 mb-12 text-[5px] text-black">
            University press & Assessment
          </p>
        </div>
      </div>
      <div class="text-gray-300 flex mt-4 ml-9 items-center">
        <NavigationItem
          itemLabel="Books"
          itemIcon="book"
          :active="this?.activeRoute === 'products' ? true : false"
          @click="changeRoute('products')"
          :open="this.open"
        />
        <NavigationItem
          itemLabel="Users"
          itemIcon="people-group"
          :active="this?.activeRoute === 'userTypes' ? true : false"
          @click="changeRoute('userTypes')"
          :open="this.open"
        />
      </div>
      <div class="absolute right-5 text-white mt-5">
        <button
          class="bg-transparent border-[1px] rounded-full p-2 pr-4 pl-4 text-sm"
          @click="logout"
          :tabindex="open ? -1 : 0"
        >
          Logout
        </button>
        <!-- <NavigationItem itemLabel="Logout" itemIcon="right-from-bracket" :active="false" @click="logout"/> -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activeRoute: "",
    };
  },
  props:{
    open: {
      type: Boolean
    }
  },
  async mounted() {
    await this.getCurrentRoute();
  },
  methods: {
    getCurrentRoute() {
      this.activeRoute = this.$route.name;
    },
    changeRoute(path) {
      navigateTo("/" + path);
    },
    logout() {
      navigateTo("/");
    },
  },
});
</script>
