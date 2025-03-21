<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
          <li v-if="currentPage !== 1" class="page-item">
            <a style="cursor: pointer;" class="page-link" @click="changePage(currentPage - 1)">Previous</a>
          </li>
          <li v-for="page in numberOfPages" :key="page" class="page-item" 
            :class="currentPage === page ? 'active' : '' ">
            <a style="cursor: pointer;" class="page-link" @click="changePage(page)">{{ page }}</a>
          </li>
          <li v-if="numberOfPages !== currentPage" class="page-item">
            <a style="cursor: pointer;" class="page-link" @click="changePage(currentPage + 1)">Next</a>
          </li>
      </ul>
    </nav>
</template>

<script>
export default {
  props : {
    currentPage: {
      type: Number,
      required: true,
    },
    numberOfPages: {
      type: Number,
      required: true,
    }
  },//props
  
  emits : ['change-page'],

  setup(props, { emit }) {
    const changePage = (page) => {
      emit('change-page', page);
    };//changePage

    return {
      changePage,
    }
  }
}//default

</script>

<style>

</style>