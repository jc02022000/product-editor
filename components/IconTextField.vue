<template>
  <div>
    <div class="flex">
      <div
        class="mt-4 border-[1px] rounded-l-full bg-white border-r-0 h-12 flex items-center p-1"
      >
        <font-awesome-icon :icon="fieldIcon" class="p-1 text-[#bdbdbd]" />
      </div>
      <input
        :type="fieldType"
        :placeholder="fieldPlaceholder"
        class="mt-4 w-full border-[1px] rounded-r-full bg-white border-l-0"
      />
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
        fieldIcon:{
            type: String
        },
        fieldPlaceholder:{
            type: String
        },
        fieldType:{
            type: String
        }
    }
})
</script>
