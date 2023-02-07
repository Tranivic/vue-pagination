<template>
<section class="home-page">
    <h1>Home Page</h1>
    <app-list></app-list>
    <app-pagination></app-pagination>
</section>
</template>

<script>
import AppList from '../components/AppList.vue'
import AppPagination from '../components/AppPagination.vue'
export default {
    async created() {
        await this.$store.dispatch('fecthListData');
        this.$store.dispatch('pagination/getTotalOfPages');
    },
    components: {
        AppList,
        AppPagination
    },
}
</script>

<style scoped>

</style>
