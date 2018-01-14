<template lang="pug">
    .content
        h2.title Страница «Обо мне»
        skills-list
        button(type="button" @click="saveChanges" :disabled="isDisabled").button Сохранить
        slot(name="default")
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    methods: {
        ...mapActions('AboutStore', ['postSkillsJson']),
        ...mapActions('AboutStore', ['getSkillsJson']),
        saveChanges() {
            console.log(this.stateEdit);
            if (!this.stateEdit) {
                this.postSkillsJson();
            }
        },
    },
    computed: {
        ...mapGetters('AboutStore', ['stateEdit']),
        isDisabled() {
            return this.stateEdit;
        },
    },
    created() {
        this.getSkillsJson();
    },
    components: {
        SkillsList: require('./skillsList'),
    },
};
</script>

