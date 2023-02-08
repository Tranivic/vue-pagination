<template>
<section class="home-page">
    <h1>Dummy list</h1>
    <app-list></app-list>
    <app-pagination></app-pagination>
</section>
</template>

<script>
import AppList from '../components/AppList.vue'
import AppPagination from '../components/AppPagination.vue'
export default {
    components: {
        AppList,
        AppPagination
    },
}
</script>

<style scoped>
section{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
</style>
