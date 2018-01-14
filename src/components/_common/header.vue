<template lang="pug">
    header.header
        h1.header__title Панель администрирования
        a(href="http://maksera.ru").header__link Вернуться на сайт
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.header {
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $moss;
    flex: 0;
    &__title {
        color: #fff;
        font-family: Roboto;
        font-size: 28px;
        font-weight: 500;
        line-height: 34px;
    }
    &__link {
        opacity: 0.7;
        color: #fff;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
