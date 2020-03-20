<template>
<div class="wrapper">
  <div class="restaurants">
    <div class="restaurant" v-for="restaurant in restaurants" :key="restaurant.id">
      <div class="info">
        <h1>{{restaurant.name}}</h1>
      </div>
      <div class="image info fav">
        <img :src="'/images/restaurants/'+restaurant.image">
        <h3> City: {{restaurant.city}}</h3>
        <h3> Rating: {{restaurant.rating}}</h3>
        <p class="fix"> <input type="image" v-on:click="addFavorites(restaurant)" class="auto" src="/images/restaurants/heart.jpg"></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Favrestaurants',
  props: {
    restaurants: Array
    },
  methods: {
     addFavorites: function (item) {
	this.$root.$data.favorites.push(item)
     }
  }
}

</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.restaurants {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.restaurant {
  margin: 10px;
  margin-top: 100px;
  width: 400px;
}

.restaurant img {
  border: 2px solid #333;
  height: 160px;
  width: 120px;
  object-fit: cover;
}

.restaurant .image {
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
  margin-left: 0px;
}

.info {
  background: #33333;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 24px;
}

.info h2 {
  font-size: 24px;
}

.info h3 {
  margin: 0px;
  font-size: 18px;
  padding-left: 30px;
  margin-top: 2px;
}

.fav {
  display: flex;
}

button {
  height: 50px;
  background: #000000;
  color: white;
  border: none;
}

.auto {
  margin-left: -150px;
  margin-top: 55px;
  height: 90px;
  width: 90px;
}

.fix {
  padding-bottom: 20px;
}
</style>
