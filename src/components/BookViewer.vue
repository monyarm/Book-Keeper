<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <textarea v-text="JSON.stringify(library)"></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Book from "@/book";
import Library from "@/library";
var library: Library;

@Component
export default class BookViewer extends Vue {
  get library(): Library {
    return Library.getLibrary();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
