<template>
<div class="pagination">

    <div class="btn-container">
        <button @click="pushToSelectedPage(currentPage - 1)" class="preview-btn" :disabled="currentPage === 1">Back</button>
    </div>

    <div class="pagination-list-container">
        <ul v-if="isShortVersion" class="page-number-list short-version">
            <li @click="pushToSelectedPage(page)" v-for="page in totalOfPages / splitNumber" :key="page" class="page-number-item" :class="setActiveClass(page)">
                {{ page }}
            </li>
            <li @click="pushToSelectedPage(totalOfPages / splitNumber + 1)" class="page-number-item">...</li>
            <li @click="pushToSelectedPage(totalOfPages)" class="page-number-item" :class="setActiveClass(totalOfPages)">{{ totalOfPages }}</li>
        </ul>
        <ul v-else class="page-number-list">
            <li @click="pushToSelectedPage(page)" v-for="page in totalOfPages" :key="page" class="page-number-item" :class="setActiveClass(page)">
                {{ page }}
            </li>
        </ul>
    </div>

    <div class="btn-container">
        <button @click="pushToSelectedPage(currentPage + 1)" class="next-btn" :disabled="currentPage === totalOfPages">Next</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isShortVersion: true,
            splitNumber: 2,
        }
    },
    methods: {
        pushToSelectedPage(pageSelected) {
            this.$store.commit('pagination/setCurrentPage', pageSelected);
            this.$store.dispatch('getDisplayedList')
            this.$router.push({
                path: `/home/${this.currentPage}`
            });
            this.checkPaginationWidth();
        },
        setActiveClass(page) {
            return page === this.currentPage ? 'active' : '';
        },
        checkPaginationWidth(){
            if (this.currentPage === this.totalOfPages / this.splitNumber ||
             this.currentPage === this.totalOfPages / this.splitNumber + 1 ||
             this.currentPage < this.totalOfPages && this.currentPage > this.totalOfPages / this.splitNumber) {
                this.isShortVersion = false;
                return
            };
            if (this.currentPage === this.totalOfPages ||
                this.currentPage < this.totalOfPages / this.splitNumber ||
                this.currentPage > this.totalOfPages / this.splitNumber) {
                this.isShortVersion = true;
                return
            };
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
.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.page-number-list {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}

.page-number-item,
span {
    margin: 0 5px;
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: inset 0 0 5px #ccc;
}

span {
    cursor: default;
}
.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: inset 0 0 5px #ccc;
    cursor: pointer;
    background-color: #fff;
}
.next-btn{
margin-right: 10rem;
}
.preview-btn{
margin-left: 10rem;
}
.page-number-item:hover {
    transform: scale(1.1);
}

.page-number-item.active {
    background-color: #ccc;
}
</style>
