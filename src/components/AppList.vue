<template>
<section>
    <div class="list-info">
        <h1>This is the list</h1>
    </div>
    <ul class="list">
        <li v-for="item in dummyList" :key="item.id">{{ item.title }}</li>
    </ul>
</section>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('fecthListData');
    },
    computed: {
        dummyList() {
            return this.$store.getters.list;
        }
    },
}
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}
</style>
