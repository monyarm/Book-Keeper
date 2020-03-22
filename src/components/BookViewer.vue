<template>
<div>
  <div class="row">
  <ul id="demo" class='col'>
      <TreeItem
        class="item"
        :isOpenProp="true">
      </TreeItem>
    </ul>
    

    <textarea v-model="outputText" class='col'></textarea>
  </div>
    <button @click="generateBooks">Generate Random Books</button><input v-model="count" />
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TreeItem from '@/components/TreeItem.vue';

import BookGroup from '@/bookgroup';
import Book from '@/book';

import _ from 'lodash';


@Component(
  {
  components: {
    TreeItem
  }
}
)
export default class BookViewer extends Vue {
 
  outputText = '';
  count = 0;

  generateBooks () {
    let tempArray = JSON.parse(JSON.stringify(this.$library)).children;
    tempArray = tempArray
      .filter((x: BookGroup) => x.selected)
      .map((x: BookGroup) => this.processBookGroup(x));

    tempArray = this.filterBookGroups(tempArray);


    //console.log(tempArray);
    tempArray = _.shuffle(tempArray).slice(0, this.count);
    this.printPretty(tempArray);
    

  }

  filterBookGroups(input: (BookGroup | Book)[] | BookGroup): (BookGroup | Book)[] | BookGroup {
    console.log(input);
      if (input instanceof Array && input.some(e => e.hasOwnProperty('children'))) {
        return this.filterBookGroups((input as (BookGroup | Book)[]).map((x: BookGroup | Book)=> {
          if(x.hasOwnProperty('children')) {return ((x as BookGroup).children)}
          else {return x}
        }).flat());
      }

      return input
      
  }




printPretty(arr: Book[]) {
  this.outputText='';
  this.outputText+= ('---------\n');
  arr.forEach(book => {
    this.outputText+= ('Title: ' + book.title + '\n');
    if (book.translatedTitle) {
      this.outputText+= ('Translated Title: ' + book.translatedTitle + '\n');
    }
    if (book.language) {
      this.outputText+= ('Language: ' + book.language + '\n');
    }
    if (book.author) {
      this.outputText+= ('Author: ' + book.author + '\n');
    }
    if (book.category) {
      book.category.forEach(cat => {
        this.outputText+= ('Category: ' + cat + '\n');
      });
    }
    if (book.description) {
      this.outputText+= ('Description: ' + book.description + '\n');
    }
    this.outputText+= ('---------\n');
  });
}


  processBookGroup (item: BookGroup): BookGroup {
    if ( item.children instanceof Array ){
      if (item.children[1] instanceof BookGroup){

       item.children = (item.children as BookGroup[] )
          .filter((x: BookGroup) => x.selected)
          .map((x: BookGroup) => this.processBookGroup(x));
      }
      else if (item.children[1] instanceof Book) {
        item.children = (item.children as Book[] ).filter((x: Book) => x.selected)
      }
     
    }

    return item;
  }

}
</script>

<style scoped lang="scss">
@import "@/styles/style.scss";
</style>
