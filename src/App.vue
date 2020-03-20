<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="../images/logo.jpg">
      </router-link>
    </div>
    <nav>
      <div>
        <ul>
          <li>
          <router-link to="/">
            <h2> Home </h2>
            </router-link>
          </li>
          <li>
          <router-link to="/favorites">
            <h2>Favorites</h2>
            </router-link>
          </li>
          <li>
          <router-link to="/about">
            <h2>About me</h2>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="menu-item favs" id="side"> <h1> Restaurant Rater! </h1> </div>
  </div>
  <router-view />
  <div margin-bottom>
  <footer class="footer">
    <div class="center">
       <a href="https://github.com/wallace128/restaurant.git">GitHub</a>
    </div>
  </footer>
  </div>
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 70px;
}

.menu-item {
  display: flex;
  margin-top: 50px;
}

ul {
  margin-left: 150px;
  margin-top: 20px;
  padding-top: 15px;

}

.margin-bottom {
  margin-bottom: 20px;
}

.menu-item p {
  margin: 0px;
}

.favs {
  margin-left: 30px;
}

body {
  background-color: lightgrey;
}

</style>
