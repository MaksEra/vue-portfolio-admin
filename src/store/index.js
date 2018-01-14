import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.http.options.root = '/src/components';
//  Import modules
import AboutStore from './modules/AboutStore';
import BlogStore from './modules/BlogStore';
import WorksStore from './modules/WorksStore';

export const store = new Vuex.Store({
    getters: {
        $http: () => (VueResource),
    },
    modules: {
        AboutStore,
        BlogStore,
        WorksStore,
    },
});
