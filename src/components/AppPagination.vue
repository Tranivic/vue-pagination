<template>
<div class="pagination">
    <ul class="page-number-list">
        <li @click="pushToSelectedPage(pageNumber)" v-for="pageNumber in totalOfPages" :key="pageNumber" class="page-number">
            {{ pageNumber }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    methods: {
        pushToSelectedPage(pageSelected) {
            this.$store.dispatch('pagination/setCurrentPage', pageSelected);
            this.$router.push({ path: `/home/${this.currentPage}`});
        }
    },
    computed: {
        totalOfPages() {
            return this.$store.getters['pagination/totalOfPages'];
        },
        itemPerPage() {
            return this.$store.getters['pagination/perPage'];
        },
        currentPage() {
            return this.$store.getters['pagination/currentPage'];
        },
    },
}
</script>

<style scoped>
ul{
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}
li{
    margin: 0 5px;
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: inset 0 0 5px #ccc;
}
</style>
