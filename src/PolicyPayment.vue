<template>
  <div>
    <h4>Payment</h4>
    <label>
      <input type="radio" value="atm" v-model="payment" />
      ATM
    </label>
    <label v-if="canUseCredit">
      <input type="radio" value="credit" v-model="payment" />
      Credit Card
    </label>

    <h4>PayTime</h4>
    <label v-if="canUseYear">
      <input type="radio" value="year" v-model="paytime" />
      YEAR
    </label>
    <label>
      <input type="radio" value="quater" v-model="paytime" />
      Quater
    </label>

    <hr />

    <button @click="submit">submit</button>
  </div>
</template>

<script>
export default {
  computed: {
    payment: {
      get() {
        return this.$store.getters.form.payment;
      },
      set(val) {
        this.$store.dispatch("setForm", { payment: val });
      },
    },
    paytime: {
      get() {
        return this.$store.getters.form.paytime;
      },
      set(val) {
        this.$store.dispatch("setForm", { paytime: val });
      },
    },
    canUseCredit() {
      const type = this.$store.getters.form.type;
      return type === "A" || type === "B";
    },
    canUserYear() {
      // const type = this.$store.getters.form.type;
      // const payment = this.$store.getters.form.payment;
      const { type, payment } = this.$store.getters.form;
      return (
        (type === "A" && payment === "atm") ||
        (type === "B" && payment === "credit")
      );
    },
  },
  methods: {
    submit() {
      this.$store.dispatch("submitForm");
    },
  },
};
</script>