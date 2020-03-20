<template>
<div>
  <h2 class="align"> Click the hearts to create a collection of your favorite restaurants </h2>
  <Favrestaurants :restaurants="restaurants" />
</div>
</template>

<script>
import Favrestaurants from "../components/Favrestaurants.vue"
export default {
  name: 'Home',
  components: {
    Favrestaurants
  },
  data() {
    return {
    }
  },
  computed: {
    restaurants() {
      return this.$root.$data.restaurants;
    }
  },
}
</script>

<style>
  .align {
    text-align: center;
    margin-bottom: -50px;
  }
  body {
   min-height: 400px;
   margin-bottom: 130px;
   clear: both;
}
</style>
