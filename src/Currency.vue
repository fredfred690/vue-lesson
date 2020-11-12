<template>
  <div>
    <input v-model="text" />
    <ul>
      <li>TWD: {{ twd }}</li>
      <li>JPY: {{ jpy }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "0",
  }),
  computed: {
    twd() {
      return parseInt(this.text, 10);
    },
    jpy() {
      return parseInt(this.text, 10) * 123;
    },
  },
};
</script>

<style>
</style>