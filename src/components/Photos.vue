<template>
  <div>
    <div class="dropdown-wrapper">
      <div class="card text-center m-3">
        <h3 class="card-header" @click="toggleDropdown">Camera: <span v-html="currentSelection"></span>
          <div class="icon-menu">Ξ</div>
        </h3>
          <div class="card-body" v-if="loading">
            <loader></loader>
          </div>
          <div class="card-body" v-else-if="pageOfItems.length">
            <div v-for="photo in pageOfItems" :key="photo._id">
              <img :src="photo.img_src" :alt="currentSelection + ' photo image from Curiosity' + photo._id">
            </div>
          </div>
          <div class="card-body" v-else>
            <h3>Sorry, there are no photos for this camera</h3>
          </div>
        <div class="card-footer pb-0 pt-3">
          <jw-pagination :items="photos" :pageSize="1" @changePage="onChangePage"></jw-pagination>
        </div>
        <transition name="fade">
          <div class="dropdown" v-show="dropDownIsVisible">
            <h3 class="card-header" v-for="camera in filteredDropdown" v-html="camera.name" :key="camera.id"
                @click="selectCamera(camera.name)"></h3>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Loader from "./Loader";

export default {
  name: 'Photos',
  data() {
    return {
      currentSelection: 'FHAZ',
      dropDownIsVisible: false,
      pageOfItems: [],
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
  computed: {
    ...mapGetters(["photos", "loading"]),
    filteredDropdown() {
      return [...this.cameras.filter((item) => item.name !== this.currentSelection)]
    }
  },
  methods: {
    ...mapActions(["loadPhotos"]),
    selectCamera(camera) {
      this.currentSelection = camera;
      this.loadPhotos(camera);
      this.dropDownIsVisible = false;
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    toggleDropdown() {
      this.dropDownIsVisible = !this.dropDownIsVisible;
    }
  },
  components: {
    Loader
  }
}
</script>

<style scoped>
h3 {
  margin: 0px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.card-body {
  height: 730px;
}

.card-body img {
  height: 690px;
}

.card-header {
  position: relative;
  background-color: #f7f7f7;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #ffffff;
}

.dropdown .card-header {
  margin-top: 4px;
}

.icon-menu {
  position: absolute;
  top: 12px;
  right: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>