<template>
  <div>
    <div v-if="errorList.length > 0">
      <h2>There was an error fetching data.</h2>
      <ul class="errors">
        <li v-for="error in errorList">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorList',
  data () {
    return {

    }
  },
  props: {
    errorList: {}
  }
}
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<!-- global styles in App.vue -->
<style scoped>
  .errors li {
    color: red;
    border: solid red 1px;
    padding: 5px;
  }
</style>