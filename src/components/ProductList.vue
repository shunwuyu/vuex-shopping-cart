<template lang="html">
  <ul>
    <li v-for="p in products">
      {{ p.title }} - {{ p.price | currency }}
      <br>
      <button @click="addToCart(p)" type="button" name="button">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>

<style lang="css">
</style>
