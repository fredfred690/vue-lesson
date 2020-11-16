<template>
  <div>
    <div>您</div>
    <button v-if="!show" @click="show = true">More</button>
    <button v-else @click="show = false">hide</button>
    <!-- <div v-if="show">TEST</div>
    <div v-else>click "more" show</div> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>

<style>
</style>