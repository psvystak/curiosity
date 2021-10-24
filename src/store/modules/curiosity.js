import axios from "axios";

export default {
    actions: {
        async loadPhotos({commit}, camera) {
            try {
                if (!this.state.curiosity['photos' + camera]) {
                    commit('loading');
                    const res = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=' + camera + '&api_key=z97WC7ohvCh0e2pXDIKCXggStsHhyWff1RT9iRtq');
                    const photos = await res.data.photos;
                    commit('getPhotos', photos)
                    commit('cachePhotos', camera)
                    commit('loaded')
                }
                else {
                    commit('showCachedPhotos', camera)
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    state: {
        photos: [],
        loading: true,
    },
    getters: {
        photos: state => {
            return state.photos;
        },
        loading: state => {
            return state.loading;
        }
    },
    mutations: {
        loading(state) {
            state.loading = true;
        },
        loaded(state) {
            state.loading = false;
        },
        getPhotos(state, photos) {
            state.photos = photos;
        },
        cachePhotos(state, camera) {
            state['photos' + camera] = state.photos;
        },
        showCachedPhotos(state, camera) {
            state.photos = state['photos' + camera];
        }
    },
}
