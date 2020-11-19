<template>
  <div>
    <h1>{{ count }}</h1>
    <button v-on:click="add">Add{{ count2 }}</button>

    <button v-on:click="addGlobal">Add Global</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
    count2: 0,
  }),
  methods: {
    add() {
      this.count2 += 1;
      this.count += this.count2;
    },
    subtract() {
      this.count -= 1;
    },
    addGlobal() {
      // this.$store.commit("addCount");
      this.$store.dispatch("add");
    },
  },
};
</script>

<style>
</style>