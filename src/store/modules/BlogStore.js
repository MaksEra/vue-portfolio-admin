import { Api } from './../Api/Api';
const BlogStore = {
    namespaced: true,
    state: {
        data: [],
        saveAlert: false,
    },
    getters: {
        posts: ({ data }) => (data),
        saveAlertBlog(state) {
            return state.saveAlert;
        },
    },
    mutations: {
        addNewPost(state, post) {
            state.data.push(post);
        },
        removePost(state, postId) {
            state.data = state.data.filter(post => (post.id !== postId));
        },
        updatePost(state, post) {
            state.data = state.data.map(item => item.id !== post.id ? item : post);
        },
        changeAlert(state, value) {
            state.saveAlert = value;
        },
    },
    actions: {
        // Todo axios get post data-skills.json
        getPostsJson(context) {
            Api.getPosts().then(response => {
                context.state.data = response;
            });
        },
        postNewPostJson(context) {
            Api.postPosts(context.state.data);
            context.dispatch('openAlertBlog');
        },
        openAlertBlog(context) {
            context.commit('changeAlert', true);
        },
        closeAlertBlog(context) {
            context.commit('changeAlert', false);
        },
    },
};
export default BlogStore;
