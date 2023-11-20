<template>
  <div :class="$style.sizemediumTypeprimarySta">
    <div :class="$style.text">{{label}}</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SizeMediumTypePrimarySta",
    props: {
      label: { type: String, default: "Button" },
    },
  });
</script>
<style module>
  .text {
    position: relative;
    letter-spacing: -0.4px;
    line-height: 18px;
    font-weight: 500;
  }
  .sizemediumTypeprimarySta {
    border-radius: var(--radius-radius-round);
    background-color: var(--color-primarycolor);
    height: 28px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-4) var(--radius-radius-s);
    box-sizing: border-box;
    text-align: center;
    font-size: var(--font-size-smi);
    color: var(--background-surface-white-black);
    font-family: var(--font-inter-variable);
  }
</style>
