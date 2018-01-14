<template lang="pug">
    table.skills-table
        tr.skills-table__row(v-for="skill in skills")
            skill-item(:skill="skill")
        tr.skills-table__row
            input(type="text" v-model="newItem.name" placeholder="Технология").skills-table__input.skills-table__input_long
            .skills-table__cell
                input(type="text" v-model="newItem.percents").skills-table__input
                | %
        button(type="button" @click="addNewItem" :disabled="isDisabled").button.skills-table__button Добавить новый скилл в {{skillType}}
            
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        skills: Array,
        skillType: String,
    },
    data() {
        return {
            newItem: {
                name: '',
                percents: 0,
                id: Math.random() * 100,
            },
        };
    },
    computed: {
        isDisabled() {
            if (this.newItem.name) {
                return false;
            }
            return true;
        },
    },
    methods: {
        ...mapMutations('AboutStore', ['addNewSkillItem']),
        addNewItem() {
            // console.log('add!', { ...this.newItem });
            const newItem = {
                skillType: this.skillType,
                newSkill: { ...this.newItem },
            };
            this.addNewSkillItem(newItem);
            this.newItem.name = '';
            this.newItem.percents = '';
            this.newItem.id = Math.random();
        },
    },
    components: {
        SkillItem: require('./skillItem'),
    },
};
</script>
<style lang="scss" scoped>
.skills-table {
    display: block;
    width: 100%;
    padding: 0 100px 30px 20px;
    &__row {
        width: 100%;
        display: flex;
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    &__cell {
        display: flex;
        align-items: center;
    }
    &__input {
        display: block;
        width: 46px;
        height: 32px;
        padding: 0 10px;
        background-color: #fff;
        border-radius: 8px;
        text-align: center;
        border: 0;
        margin-right: 10px;
        &_long {
            width: 100%;
        }
    }
    &__button {
        height: auto;
        font-size: 14px;
        padding: 10px;
    }
}
</style>


