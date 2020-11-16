<template>
  <div>
    <select v-model="cityCode">
      <option v-for="city in cities" :key="city.code" :value="city.code">
        {{ city.name }}
      </option>
    </select>
    {{ cityCode }}

    <select v-model="regionCode">
      <option v-for="region in regions" :key="region.code" :value="region.code">
        {{ region.name }}
      </option>
    </select>
    {{ regionCode }}
  </div>
</template>

<script>
import zipcode from "./zipcode.json";

export default {
  props: {
    zipcode: {
      type: Object,
      default: () => zipcode,
    },
  },
  data: () => ({
    cityCode: 100,
    regionCode: 104,
  }),
  computed: {
    cities() {
      return zipcode.cities;
    },
    regions() {
      const city = this.cities.find((city) => city.code === this.cityCode);
      return city.regions;
      //   return zipcode.regions;
    },
  },
  watch: {
    cities: {
      handler() {
        const [city] = this.cities;
        if (city) {
          this.cityCode = city.code;
        }
      },
      immediate: true,
    },
    regions: {
      handler() {
        const [region] = this.regions;
        if (region) {
          this.regionCode = region.code;
        }
      },
      immediate: true,
    },
    regionCode(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style>
</style>