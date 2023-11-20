<template>
  <button
    :class="$style.button"
    :autoFocus="true"
    :disabled="true"
    id=".btn"
    :muted="false"
    preload="auto"
  >
    <div :class="$style.text">{{label}}</div>
  </button>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Button",
    props: {
      label: { type: String, default: "Button" },
    },
  });
</script>
<style module>
  .text {
    position: relative;
    font-size: var(--font-size-smi);
    letter-spacing: -0.4px;
    line-height: 18px;
    font-weight: 500;
    font-family: var(--font-inter-variable);
    color: var(--background-surface-white-black);
    text-align: center;
  }
  .button {
    border: none;
    padding: var(--spacing-4) var(--radius-radius-s);
    background-color: var(--color-primarycolor);
    border-radius: var(--radius-radius-round);
    height: 28px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  .button:hover {
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #007aff;
  }
</style>
