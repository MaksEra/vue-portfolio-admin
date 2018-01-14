<template lang="pug">
    #app
        .container
            app-header
            app-tabs
            router-view
                app-alert
            
</template> 

<script>
export default {
    name: 'app',
    components: {
        AppHeader: require('./components/_common/header.vue'),
        AppTabs: require('./components/_common/tabs.vue'),
        AppAlert: require('./components/_common/alert.vue'),
    },
};
</script>

<!--<style lang="sсss" src="styles/common/base.sсss"></style>-->
