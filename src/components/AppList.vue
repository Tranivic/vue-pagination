<template>
    <ul class="list">
        <li v-for="item in dummyList" :key="item.id">{{ item.title }}</li>
    </ul>
</template>
<script>
export default {
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
