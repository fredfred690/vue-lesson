<template>
  <div>
    <h1> {{count}} </h1>
    <button @click="count += 1" >
      ADD
    </button>
    <h2 v-if="count%2 === 0">Even</h2>
    <ol>
      <li v-for ="text in list" :key ="text">
        {{text}}
      </li>
    </ol>
    <ul>
      <li v-for ="text in list" :key="text">
        {{text}}
      </li>
    </ul>
    <input v-model="user" />
    <h1> {{user}} </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {count : 0,
      list: [
        'JavaScript',
        'Vue',
        '$ Profit $',
      ],
      user: '',
    }
  }
}
</script>

<style>
  div {
    color:black;
  }

</style>