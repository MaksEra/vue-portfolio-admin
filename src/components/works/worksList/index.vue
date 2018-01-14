<template lang="pug">
    .works-list
        p.warning-title(v-if="!works.length") У вас нет работ
        table.works-list__table(v-for="item in works" :key="item.id" @click.stop="chooseWork(item)")
            button(type="button" @click.stop="deleteWork(item)").works-list__remove.remove-btn X
            h3.subtitle {{ item.name }}
            p.subtitle {{ item.date }}
            p.subtitle {{ item.technology }}
            img.img-responsive.works-list__preview(:src="item.img")
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('WorksStore', ['works']),
    },
    methods: {
        chooseWork(work) {
            this.$emit('chooseWork', work);
        },
        deleteWork(work) {
            this.$emit('deleteWork', work);
        },
    },
};
</script>

<style lang="scss" src="./style.scss" scoped>

</style>
