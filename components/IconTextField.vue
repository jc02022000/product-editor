<template>
  <div class="mt-1">
    <label :for="id" class="text-xs ml-2">{{ label }}</label>
    <div class="flex">
      <div
        class="border-[1px] rounded-l-full bg-white border-r-0 h-12 flex items-center p-1"
      >
        <font-awesome-icon :icon="fieldIcon" class="p-1 text-[#475569]" />
      </div>
      <input
        :id="id"
        :type="fieldType"
        :placeholder="fieldPlaceholder"
        :required="required"
        class="w-full border-[1px] rounded-r-full bg-white border-l-0 text-[#475569]"
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
        },
        id:{
          type: String
        },
        required:{
          type: Boolean
        },
        label:{
          type: String
        }
    }
})
</script>
