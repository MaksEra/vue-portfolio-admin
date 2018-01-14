import axios from 'axios';
export const Api = {
    getSkills() {
        return axios.get('./src/store/data-skills.json')
            .then(function(response) {
                console.log('get json in about!');
                return response.data;
            })
            .catch(e => { console.error(e); return []; });
    },
    postSkills(data) {
        console.log('post json from about!', data);
    },
    getWorks() {
        return axios.get('./src/store/data-works.json')
            .then(function(response) {
                console.log('get json in works!');
                return response.data;
            })
            .catch(e => { console.error(e); return []; });
    },
    postWorks(data) {
        console.log('post json from works!', data);
    },
    getPosts() {
        return axios.get('./src/store/data-blog.json')
            .then(function(response) {
                console.log('get json in blog!');
                return response.data;
            })
            .catch(e => { console.error(e); return []; });
    },
    postPosts(data) {
        console.log('post json from blog!', data);
    },
};
