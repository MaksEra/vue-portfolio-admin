import { Api } from './../Api/Api';
const WorksStore = {
    namespaced: true,
    state: {
        data: require('./../data-works.json'),
        saveAlert: false,
    },
    getters: {
        works: ({ data }) => (data),
        saveAlertWorks(state) {
            return state.saveAlert;
        },
    },
    mutations: {
        addNewWork(state, work) {
            state.data.push(work);
        },
        removeWork(state, workId) {
            state.data = state.data.filter(work => (work.id !== workId));
        },
        updateWork(state, work) {
            state.data = state.data.map(item => item.id !== work.id ? item : work);
        },
        changeAlert(state, value) {
            state.saveAlert = value;
        },
    },
    actions: {
        // Todo axios get post data-skills.json
        getWorksJson(context) {
            Api.getWorks().then(response => {
                context.state.data = response;
            });
        },
        postNewWorkJson(context) {
            Api.postWorks(context.state.data);
            context.dispatch('openAlertWorks');
        },
        openAlertWorks(context) {
            context.commit('changeAlert', true);
        },
        closeAlertWorks(context) {
            context.commit('changeAlert', false);
        },
    },
};
export default WorksStore;
