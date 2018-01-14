<template lang="pug">
.blog-posts
    ul.blog-posts__list
        li(v-for="item in posts" @click.stop="choosePost(item)").blog-posts__item
            .blog-posts__item-top
                h2.blog-posts__title.subtitle {{ item.name }}
                button(type="button" @click.stop="deletePost(item)").remove-btn X
            time.blog-posts__date {{ item.date }}
            p.text.blog-posts__text {{ item.text }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('BlogStore', ['posts']),
    },
    methods: {
        choosePost(post) {
            this.$emit('choosePost', post);
        },
        deletePost(post) {
            this.$emit('deletePost', post);
        },
    },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
