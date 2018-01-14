<template lang="pug">
    .content
        h2.title Страница «Блог»
        .blog
            .blog-add
                h2.subtitle.section-title Добавить запись
                input(type="text" placeholder="Название" v-model="newPost.name" required).input
                input(type="date" placeholder="Дата" v-model="newPost.date" required).input
                textarea(placeholder="Текст" v-model="newPost.text" required).input.input_textarea
                button(type="button" @click="saveChanges").button Добавить
            
            blog-posts(
                @choosePost="choosePost"
                @deletePost="deletePost"
            )

        slot(name="default")
</template>
<script>
import { mapActions, mapMutations } from 'vuex';
export default {
    data() {
        return {
            newPost: {
                id: Math.random() * 1000,
                name: '',
                date: '',
                text: '',
            },
            edit: false, // Are you edit other post
        };
    },
    methods: {
        ...mapActions('BlogStore', ['postNewPostJson', 'getPostsJson']),
        ...mapMutations('BlogStore', ['addNewPost', 'updatePost', 'removePost']),
        saveChanges() {
            if (!this.edit) {
                this.addNewPost({ ...this.newPost });
            } else {
                this.updatePost({ ...this.newPost });
                this.edit = false;
            }
            this.postNewPostJson();
            this.clearForm();
        },
        choosePost(post) {
            this.edit = true;
            this.newPost = { ...post };
        },
        deletePost(post) {
            if (this.newPost.id === post.id) {
                this.clearForm();
            }
            this.removePost(post.id);
            this.edit = false;
        },
        clearForm() {
            this.newPost = {
                id: Math.random() * 1000,
                name: '',
                date: '',
                text: '',
            };
        },
    },
    created() {
        this.getPostsJson();
    },
    components: {
        BlogPosts: require('./blogPosts'),
    },
};
</script>
<style lang="scss" src="./style.scss" scoped></style>