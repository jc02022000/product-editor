<template>
  <div>
    <div class="w-full text-base mb-5 cursor-pointer mr-10">
      <button class="flex justify-center align-center  mb-2" :tabindex="open ? -1 : 0">
        <font-awesome-icon :icon="itemIcon" class="p-1 pr-2" :class="active ? 'text-white' : 'text-gray-300'"/>
        <p :class="active ? 'text-white' : ''">{{ itemLabel }}</p>
      </button>
      <div class="w-[120px] h-[5px] justify-center absolute bottom-0">
        <div class="h-full w-[70%] rounded-t-lg" :class="active ? 'bg-white' : ''"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{}
    },
    props:{
        itemLabel:{
            type: String,
        },
        itemIcon:{
            type: String
        },
        active:{
            type: Boolean
        },
        open:{
          type: Boolean
        }
    }
})
</script>
