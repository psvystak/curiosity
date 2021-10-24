<template>
  <div id="app">
    <photos></photos>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import Photos from "./components/Photos";

export default {
  name: 'App',
  components: {
    Photos
  },
  computed: mapGetters(["photos"]),
  methods: {
    ...mapActions(["loadPhotos"]),
  },
  async mounted() {
    await this.loadPhotos('FHAZ');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import'//netdna.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
</style>
