<template>
  <div>
    <div class="w-full text-base mb-5 cursor-pointer mr-10" tabindex="0">
      <div class="flex justify-center align-center  mb-2">
        <font-awesome-icon :icon="itemIcon" class="p-1 pr-2" :class="active ? 'text-white' : 'text-gray-300'"/>
        <p :class="active ? 'text-white' : ''">{{ itemLabel }}</p>
      </div>
      <div class="w-[120px] h-[5px] justify-center absolute bottom-0 ml-4">
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
        }
    }
})
</script>
