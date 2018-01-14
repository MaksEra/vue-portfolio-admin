<template lang="pug">
    .alert(@click.prevent.stop="close" v-if="alert")
        .alert__container
            p.alert__title Сообщение отправлено
            button(type="button").button.alert__button Закрыть
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('AboutStore', ['saveAlertAbout']),
        ...mapGetters('BlogStore', ['saveAlertBlog']),
        ...mapGetters('WorksStore', ['saveAlertWorks']),
        alert() {
            return this.saveAlertAbout || this.saveAlertBlog || this.saveAlertWorks;
        },
    },
    methods: {
        ...mapActions('AboutStore', ['closeAlertAbout']),
        ...mapActions('BlogStore', ['closeAlertBlog']),
        ...mapActions('WorksStore', ['closeAlertWorks']),
        close(e) {
            const target = e.target;
            // If click out of alert, or click in button
            if (!target.closest('.alert__container') || (target === this.$root.$el.querySelector('.alert__button'))) {
                this.closeAlertAbout();
                this.closeAlertBlog();
                this.closeAlertWorks();
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.alert {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &__container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        max-width: 280px;
        width: 100%;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        text-align: center;
        border-radius: 8px;
    }
    &__title {
        color: $textColor;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 15px;
    }
    &__button {
        margin: 0 auto;
    }
}
</style>


