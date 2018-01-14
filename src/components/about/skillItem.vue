<template lang="pug">
    label.skills-item
        span.skills-item__cell.subtitle {{ skill.name }}
        span.skills-item__cell
            input(type="text" v-model="skillPercents" @input="updSkill()").skills-item__input
            | %
        span.skills-item__cell
            button(type="button" @click="removeSkill").skills-item__remove X
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        skill: Object,
    },
    data() {
        return {
            skillPercents: 0,
        };
    },
    methods: {
        ...mapMutations('AboutStore', ['updateSkill', 'removeSkillItem']),
        updSkill() {
            const updatedSkill = {
                ...this.skill,
                percents: this.skillPercents,
            };
            this.updateSkill(updatedSkill);
        },
        removeSkill() {
            this.removeSkillItem(this.skill.id);
        },
    },
    mounted() {
        this.skillPercents = this.skill.percents;
    },
};
</script>
<style lang="scss" scoped>
.skills-item {
    display: flex;
    width: 100%;
    &__cell {
        display: flex;
        align-items: center;
        padding-right: 10px;
        flex: 0 0 auto;
        &:first-child {
            flex: 1 1 auto;
        }
        &:last-child {
            padding-right: 0;
        }
    }
    &__input {
        display: block;
        width: 46px;
        height: 32px;
        background-color: #fff;
        border-radius: 8px;
        text-align: center;
        border: 0;
        margin-right: 10px;
    }
    &__remove {
        background: none;
        border: 0;
        color: $textColor;
        cursor: pointer;
        transition: color 0.5s ease;
        &:hover {
            color: firebrick;
        }
    }
}
</style>
