<template>
  <div>
    <router-link to="todo-list">Todo List</router-link>
    {{ "" }}
    <router-link to="counter">Counter</router-link>

    <router-link to="/area-select">AreaSelect</router-link>
    <router-link to="/currency">Currency</router-link>
    <router-link to="/form">Form</router-link>
    <router-link to="/style">Style</router-link>
    <router-link to="/toggle">Toggle</router-link>
    <router-link to="/users">Users</router-link>

    {{ count }}
    <router-view />
    <hr />
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      // return ;
      // return this.$store.state.count;
      // return this.$store.state.count;

      return this.$store.getters.count;
    },
  },
};
</script>

<style>
a {
  margin-right: 1em;
}
</style>