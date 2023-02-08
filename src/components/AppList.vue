<template>
    <ul class="list">
        <li v-for="item in listToDisplay" :key="item.id">
            <h1>{{ item.id }}</h1>
            <p>{{ item.title }}</p>
        </li>
    </ul>
</template>
<script>
export default {
    async created() {
        await this.$store.dispatch('fecthListData');
        this.$store.commit('pagination/setCurrentPage', this.paramInRoute);
        this.$store.dispatch('pagination/getTotalOfPages');
        this.$store.dispatch('getDisplayedList');
    },
    computed: {
        dummyList() {
            return this.$store.getters.list;
        },
        listToDisplay() {
            return this.$store.getters.displayedList;
        },
        paramInRoute() {
            return this.$route.params.id ? this.$route.params.id : 1;
        },
    },
}
</script>

<style scoped>
.list {
    border-radius: 5px;
}
.list li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
    border: solid 1px #ccc;
}
.list li h1{
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px #ccc;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin: 0 2rem 0 0;
}
</style>
