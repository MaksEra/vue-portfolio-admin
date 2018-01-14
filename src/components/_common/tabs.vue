<template lang="pug">
    nav.nav
        ul.nav__list
            li.nav__item(v-for="item in pages")
                router-link( :to="item" class="nav__link" active-class="nav__link_active") {{item}}
</template>
<script>
export default {
    data() {
        return {
            pages: ['about', 'works', 'blog'],
        };
    },
};
</script>
<style lang="scss" scoped>
.nav {
    background-color: $tabsColor;
    flex: 0;
    &__list {
        display: flex;
    }
    &__item {
        border-right: 3px solid #fff;
        max-width: 180px;
        width: 100%;
        &::last-child {
            border-right: 0;
        }
    }
    &__link {
        padding: 24px 10px;
        color: $textColor;
        opacity: 0.8;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        display: block;
        text-align: center;
        &_active {
            background-color: #fff;
            color: $moss;
        }
    }
}
</style>


