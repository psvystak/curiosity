import Vue from 'vue'
import Vuex from 'vuex'
import curiosity from '@/store/modules/curiosity'
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

Vue.use(Vuex)

Vue.prototype.$store = new Vuex.Store({
    modules: {
        curiosity
    }
})
import Photos from '@/components/Photos.vue';

function mountComponentWithProps(Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({
        propsData
    }).$mount();

    return vm.$el;
}

let propsData = {currentSelection: 'FHAZ', cameras: [
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
    ], dropDownIsVisible: false}

describe('Photos.vue', () => {
    it('All props have correct types', () => {
        const currentComponent = mountComponentWithProps(Photos, propsData);
        const currentSelection = currentComponent.__vue__._props.currentSelection;
        const cameras = currentComponent.__vue__._props.cameras;
        const dropDownIsVisible = currentComponent.__vue__._props.dropDownIsVisible;

        expect(typeof currentSelection).toBe('string');
        expect(Array.isArray(cameras)).toBe(true);
        expect(typeof dropDownIsVisible).toBe('boolean');
    })
})

describe('Photos.vue', () => {
    it('When the property drop down is true, show dropdown', () => {
        propsData.dropDownIsVisible = true;
        const currentComponent = mountComponentWithProps(Photos, propsData);
        const dropdown = currentComponent.querySelector('.dropdown');
        expect(dropdown.style.display).toBe('');
        propsData.dropDownIsVisible = false;
    })
})

describe('Photos.vue', () => {
    it('When the item in list is chosen, it should be appear in header', () => {
        propsData.dropDownIsVisible = true;
        let currentComponent = mountComponentWithProps(Photos, propsData);
        const dropdownItems = propsData.cameras;
        dropdownItems.forEach(function(element) {
            propsData.currentSelection = element.name;
            currentComponent = mountComponentWithProps(Photos, propsData);
            let header = currentComponent.querySelector('.text-center > .card-header span');
            expect(header.innerHTML).toEqual(propsData.currentSelection);
        })
        propsData.dropDownIsVisible = false;
    })
})