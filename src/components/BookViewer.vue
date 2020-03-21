<template>
<div>
  <div class="row">
  <ul id="demo" class='col'>
      <TreeItem
        class="item"
        :item="this.$library"
        :isOpenProp="true">
      </TreeItem>
    </ul>
    

    <textarea  class='col' id="outputText"></textarea>
  </div>
    <button @click="generateBooks">Generate Random Books</button>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TreeItem from '@/components/TreeItem.vue';
import Library from '@/library';
library: Library;

@Component(
  {
  components: {
    TreeItem
  }
}
)
export default class BookViewer extends Vue {
 
  generateBooks () {
    //
  }


}
</script>

<style scoped lang="scss">
@import "@/styles/style.scss";
</style>
