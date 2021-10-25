<template>
  <div id="app">
    <photos
        :currentSelection="currentSelection"
        :dropDownIsVisible="dropDownIsVisible"
        :cameras="cameras"
    ></photos>
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
  data() {
    return {
      currentSelection: 'FHAZ',
      dropDownIsVisible: false,
      cameras: [
        {
          id: 0,
          name: 'FHAZ'
        },
        {
          id: 1,
          name: 'RHAZ'
        },
        {
          id: 2,
          name: 'MAST'
        },
        {
          id: 3,
          name: 'CHEMCAM'
        },
        {
          id: 4,
          name: 'MAHLI'
        },
        {
          id: 5,
          name: 'MARDI'
        },
        {
          id: 6,
          name: 'NAVCAM'
        }
      ]
    }
  },
  computed: mapGetters(["photos"]),
  methods: {
    ...mapActions(["loadPhotos"])
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
