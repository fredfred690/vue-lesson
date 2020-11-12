<template>
  <div :class="{ list: active, red: !active }">
    Hello
    <button @click="active = !active">Toggle</button>
  </div>

 
</template>

<script>
export default {
  data: () => ({
    active: false,
  }),
};
</script>

<style>
.list {
  color: yellow;
}

.red {
  color: red;
}
</style>