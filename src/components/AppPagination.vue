<template>
<div class="pagination">
    <ul class="page-number-list">
        <li @click="pushToSelectedPage(page)" v-for="page in totalOfPages" :key="page" class="page-number-item" :class="setActiveClass(page)" >
            {{ page }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    methods: {
        pushToSelectedPage(pageSelected) {
            this.$store.commit('pagination/setCurrentPage', pageSelected);
            this.$store.dispatch('getDisplayedList')
            this.$router.push({ path: `/home/${this.currentPage}`});
        },
        setActiveClass(page) {
            return page === this.currentPage ? 'active' : '';
        },
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
.page-number-list{
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}
.page-number-item{
    margin: 0 5px;
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: inset 0 0 5px #ccc;
}
.page-number-item:hover{
    background-color: #ccc;
}
.page-number-item.active{
    background-color: #ccc;
}
</style>
