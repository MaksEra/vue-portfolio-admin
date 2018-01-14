import { Api } from './../Api/Api';
const AboutStore = {
    namespaced: true,
    state: {
        data: [],
        edited: true,
        saveAlert: false,
    },
    getters: {
        skills: ({ data }) => (data),
        stateEdit(state) {
            return state.edited;
        },
        saveAlertAbout(state) {
            return state.saveAlert;
        },
    },
    mutations: {
        addNewSkillItem(state, newSkill) {
            state.edited = false;
            state.data = state.data.map(skillTable => {
                if (skillTable.skillType === newSkill.skillType) {
                    skillTable.skills.push(newSkill.newSkill);
                }
                return skillTable;
            });
        },
        addNewSkillTable(state, skillType) {
            const skillTable = {
                id: Date.now(),
                skillType: skillType,
                skills: [],
            };
            state.data.push(skillTable);
        },
        removeSkillItem(state, skillId) {
            state.edited = false;
            state.data = state.data.map(skillTable => {
                skillTable.skills =
                    skillTable.skills.filter(skillItem => skillItem.id !== skillId);
                return skillTable;
            });
        },
        removeSkillTable(state, skillTableId) {
            state.data = state.data.filter(table => table.id !== skillTableId);
        },
        updateSkill(state, skill) {
            state.edited = false;
            for (let i = 0; i < state.data.length; i++) {
                for (let j = 0; j < state.data[i].skills.length; j++) {
                    if (state.data[i].skills[j].id === skill.id) {
                        state.data[i].skills[j] = skill;
                    }
                }
            }
        },
        changeAlert(state, value) {
            state.saveAlert = value;
        },
        changeEdited(state, value) {
            state.edited = value;
        },
    },
    actions: {
        // Todo axios get post data-skills.json
        getSkillsJson(context) {
            Api.getSkills()
            .then(response => {
                context.state.data = response;
            });
        },
        postSkillsJson(context) {
            if (!context.state.edited) {
                Api.postSkills(context.state.data);
                context.dispatch('openAlertAbout');
                context.commit('changeEdited', true);
            }
        },
        openAlertAbout(context) {
            context.commit('changeAlert', true);
        },
        closeAlertAbout(context) {
            context.commit('changeAlert', false);
        },
    },
};
export default AboutStore;
