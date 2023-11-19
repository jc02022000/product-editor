<template>
  <div id="content">
    <div class="flex items-end ml-9">
      <div class="flex w-[89%]">
        <div
          class="mt-5 border-[1px] rounded-l-lg bg-slate-500 border-r-0 h-8 flex items-center p-1"
        >
          <label for="search" class="text-sm text-white">Search</label>
          <font-awesome-icon icon="search" class="p-1 text-white" />
        </div>
        <input
          :value="modelValue"
          :tabindex="open ? -1 : 0"
          id="search"
          type="text"
          :placeholder="
            activeRoute === 'products'
              ? '   Search a book...'
              : '   Search a user type...'
          "
          class="mt-5 w-2/5 border-[1px] rounded-r-lg bg-white border-l-0"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <!-- <label for="search">Search A Book</label> -->
      </div>
      <button
        class="h-8 text-[#1D1C1C] bg-[#28C840] rounded-md text-xs p-2 hover:bg-[]"
        @click="$emit('clickButton')"
        :tabindex="this.open ? -1 : 0"
      >
        Add New {{ activeRoute === "products" ? "Book" : "User Type" }}
      </button>
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
  emits: ["update:modelValue"],
  props: {
    open: {
      type: Boolean,
    },
    modelValue: {
      type: String,
    },
  },
  emits: ["clickButton"],
  mounted() {
    this.activeRoute = this.$route.name;
  },
});
</script>
