<template>
  <div>
    <nav class="sticky top-0 z-10">
      <NavigationBar :open="open"/>
    </nav>
    <main>
      <div>
        <SectionHeader />
        <slot></slot>
        <!-- <SectionTool />
      <div class="w-[96%] mt-8">
        <slot></slot>
      </div> -->
      </div>
    </main>

    <footer class="h-[90px] w-full sticky bg-[#323e53] flex items-center mt-[100px] flex">
      <div class="ml-5 text-white w-5/6">
        <p>Copyright©2023 Camrbidge University Press and Assessment</p>
      </div>
      <div class="ml-5 text-white underline absoute float-right right-0">
        <div><a href="/products" :tabindex="open ? -1 : 0">Books</a></div>
        <div><a href="/userTypes" :tabindex="open ? -1 : 0">User Types</a></div>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data(){
    return{}
  },
  props:{
    open:{
      type: Boolean
    }
  }

})
</script>
