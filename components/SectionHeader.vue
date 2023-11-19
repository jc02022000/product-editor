<template>
  <div>
    <div class="border-b-[1px] border-slate-300 p-2.5 pt-1 w-full flex pr-">
      <h1 class="text-[#323e53] w-10/12 mt-7 font-bold text-[25px] ml-9" >{{this?.activeRoute === "products" ? "Books" : "User Types"}}</h1>
      <img src="@/assets/img/IMG_6010.jpeg" class="h-12 w-12 rounded-full bg-contain mr-1 mt-5" alt="Your Profile Picture"/>
      <div class="mb-4">
        <p class="mb-0 mt-6 text-[#242c41] text-sm">Jecelito V. Batac</p>
        <p class="mt-0 text-xs text-slate-700">Administrator</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data(){
    return{
      activeRoute: "",
    }
  },
  mounted(){
    this.activeRoute = this.$route.name;
  }
})
</script>
