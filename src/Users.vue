<template>
  <div>
    <select v-model="gender">
      <option value="all">all</option>
      <option value="male">male</option>
      <option value="female">female</option>
    </select>
    <!-- <button @click="gender = 'all'">all</button>
    <button @click="gender = 'male'">male</button>
    <button @click="gender = 'female'">female</button> -->
    <br />
    <input type="radio" v-model="age" value="all" />all
    <input type="radio" v-model="age" value="young" />young
    <input type="radio" v-model="age" value="old" />old
    <!-- <button @click="age = 'all'">all</button>
    <button @click="age = 'young'">young</button>
    <button @click="age = 'old'">old</button> -->
    <br />
    <button @click="order = 'asc'">升冪</button>
    <button @click="order = 'desc'">降冪</button>
    <table border="1">
      <tbody>
        <tr v-for="user in orderedUsers" :key="user.username">
          <td>{{ user.gender }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.age }}</td>
          <td><img v-bind:src="user.picture" /></td>
        </tr>
      </tbody>
    </table>
    <!-- {{ users }} -->
  </div>
</template>

<script>
// import users from "./users.json";
export default {
  data: () => ({
    users: [],
    gender: "male",
    age: "all",
    order: "asc",
  }),
  computed: {
    filteredUsers() {
      return this.users
        .filter((elm) => elm.gender === this.gender || this.gender === "all")
        .filter((elm) => {
          if (this.age === "all") {
            return true;
          } else if (this.age === "young") {
            return elm.age <= 30;
          } else {
            return elm.age > 30;
          }
        });
    },
    orderedUsers() {
      const arr = [...this.filteredUsers];
      return arr.sort((a, b) => {
        if (this.order === "asc") {
          return a.age - b.age;
        } else {
          return b.age - a.age;
        }
      });
    },
  },
  mounted() {
    fetch("http://10.2.1.127/users.json")
      .then((response) => response.json())
      .then((data) => (this.users = data));
  },
};
</script>

<style>
</style>