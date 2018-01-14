<template lang="pug">
    ul.skills-list
        li.skills-list__item(v-for="skillTable in skillList")
            button(type="button" @click="removeSkillTable(skillTable.id)").skills-list__remove.remove-btn X
            h3.skills-list__title {{ skillTable.skillType }}
            skills-table(:skills="skillTable.skills" :skillType="skillTable.skillType" )
        li.skills-list__item.skills-list__item_add
            input(type="text" v-model="newSkillType" placeholder="Новый скилл").input
            button(type="button" @click="addNewTable").button Добавить {{ newSkillType }}
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            newSkillType: '',
        };
    },
    methods: {
        ...mapGetters('AboutStore', ['skills']),
        ...mapMutations('AboutStore', ['addNewSkillTable', 'removeSkillTable']),
        addNewTable() {
            this.addNewSkillTable(this.newSkillType);
            this.newSkillType = '';
        },
    },
    computed: {
        skillList(titleType) {
            return this.skills();
        },
    },
    components: {
        SkillsTable: require('./skillsTable'),
    },
};
</script>

<style lang="scss" scoped>
.skills-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: column;
    padding-top: 45px;
    &__item {
        position: relative;
        &_add {
            padding: 0 100px 30px 20px;
        }
    }
    &__title {
        color: $textColor;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 34px;
    }
    &__remove {
        position: absolute;
        top: 5px;
        right: 100px;
    }
}
</style>

