<template lang="pug">
    .content
        h2.title Страница «Мои работы»
        .works
            .works-add
                h2.subtitle.section-title Добавить работу
                input(type="text" placeholder="Название работы" v-model="newWork.name" required).input
                input(type="text" placeholder="Технологии" v-model="newWork.technology" required).input
                label(for="upload").button Загрузить картинку
                input(type="file" id="upload" accept="image/jpeg" placeholder="Загрузить картинку" @change="addFile" required).hidden
                progress(max="100" :value="percentLoad" v-if="percentLoad")
                    | {{ percentLoad }}
                button(type="button" @click="saveChanges").button.works-add__save Добавить
            works-list(
                @chooseWork="chooseWork"
                @deleteWork="deleteWork"
            )
        slot(name="default")
</template>
<script>
import { mapActions, mapMutations } from 'vuex';
export default {
    data() {
        return {
            newWork: {
                id: Date.now(),
                name: '',
                technology: '',
                date: '',
            },
            edit: false,
            percentLoad: 0,
        };
    },
    methods: {
        ...mapActions('WorksStore', ['postNewWorkJson', 'getWorksJson']),
        ...mapMutations('WorksStore', ['addNewWork', 'updateWork', 'removeWork']),
        saveChanges() {
            if (this.validator()) {
                if (!this.edit) {
                    const now = new Date();
                    this.newWork.date = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDay()}`;
                    this.addNewWork({ ...this.newWork });
                } else {
                    this.updateWork({ ...this.newWork });
                    this.edit = false;
                }
                this.postNewWorkJson();
                this.clearForm();
            }
        },
        addFile(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.newWork.img = reader.result;
            };
            reader.onerror = () => {};
            reader.onprogress = function(e) {
                if (e.lengthComputable) {
                    const percentLoaded = Math.round((e.loaded / e.total) * 100);
                    console.log(percentLoaded);
                    // Increase the progress bar length.
                    if (percentLoaded < 100) {
                        this.percentLoad = percentLoaded;
                    }
                }
            };
        },
        chooseWork(work) {
            this.edit = true;
            this.newWork = { ...work };
        },
        deleteWork(work) {
            (this.newWork.id === work.id) ? this.clearForm() : null;
            this.removeWork(work.id);
            this.edit = false;
        },
        clearForm() {
            this.newWork = {
                id: Date.now(),
                name: '',
                technology: '',
                img: 'http://via.placeholder.com/300x300',
            };
        },
        validator() {
            let errorMessage = '';
            if (!this.newWork.name) { errorMessage += 'Заполните название!\n'; }
            if (!this.newWork.technology) { errorMessage += 'Заполните технологии!\n'; }
            if (errorMessage) {
                alert(errorMessage);
                return false;
            }
            return true;
        },
    },
    components: {
        WorksList: require('./worksList'),
    },
    created() {
        this.getWorksJson();
    },
};
</script>
<style lang="scss" src="./style.scss" scoped></style>

