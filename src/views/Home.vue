<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BookViewer msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookViewer from "@/components/BookViewer.vue"; // @ is an alias to /src

@Component({
  components: {
    BookViewer
  }
})
export default class Home extends Vue {}
</script>
