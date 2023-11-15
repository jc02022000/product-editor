<template>
  <div id="content">
    <div class="flex items-end ml-9">
      <div class="flex w-[89%]">
        <div class="mt-5 border-[1px] rounded-l-lg bg-white border-r-0 h-8 flex items-center p-1">
          <font-awesome-icon icon="search" class="p-1 text-[#bdbdbd]" />
        </div>
        <input id="search" type="text" :placeholder="activeRoute === 'products' ? 'Search a book...' : 'Search a user type...'" class="mt-5 w-2/5 border-[1px] rounded-r-lg bg-white border-l-0" />
        <!-- <label for="search">Search A Book</label> -->
      </div>
      <button class="h-8 text-white bg-[#0095ff] rounded-md text-xs p-2 hover:bg-[#0296ffd9]" @click="$emit('clickButton')">Add New {{ activeRoute === "products" ? "Book" : "User Type" }}</button>
    
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
  emits:['clickButton'],
  mounted(){
    this.activeRoute = this.$route.name;
  }
})
</script>
