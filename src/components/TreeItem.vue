<template>
   <li >
        <div
          :class="{bold: isFolder}">
          <input @click="toggleRadio" type="checkbox" v-model="isChecked"/>
          <span @click="toggleOpen" >{{ name }}</span>
          <span @click="toggleOpen" v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        </div>
        <ul v-show="isOpen" v-if="isFolder">
          <TreeItem
            class="item"
            v-for="(child, index) in item.children"
            :key="index"
            :item="child"
          ></TreeItem>
        </ul>
      </li>
</template>

<script lang="ts">
import _ from 'lodash';
import * as ptr from 'json-ptr';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Library from '@/library';
import Book from '@/book';
import BookGroup from '@/bookgroup';

@Component
export default class TreeItem extends Vue {
    
    @Prop() item: BookGroup| Book | Library;
    
    @Prop({default: false}) isOpenProp: boolean;
    isOpen: boolean = this.isOpenProp;

    get isFolder(): boolean {
        if (this.item instanceof BookGroup || this.item instanceof Library){
            return true;
        }
        return false;
    }

    get isChecked() {
            return this.item.selected;
    }



    set isChecked(newValue) {
            this.item.selected = newValue;
    }

    get name(): string {
        if (this.item instanceof BookGroup){
            return this.item.path;
        }
        else if (this.item instanceof Book || this.item instanceof Object){
            return (this.item as Book).title;
        }
        return "/";
    }


    toggleOpen(): void {
        if (this.isFolder) {
            this.isOpen = !this.isOpen;
        }
    }


    toggleRadio(): void {
            this.isChecked = !this.isChecked;
            console.log (this.item);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ptr.list(this.$library).filter((x: any) => {
                if(x.value == this.name) {
                    let searchString: string[] = x.pointer.substring(1)
                        .split('/');
                    searchString.pop();
                    searchString = [searchString.map((y: string) => {
                            if (!isNaN(Number(y))){
                                return '['+y+']'
                            }
                            return y;
                        }).join('.').replace('.[', '[') + '.selectChildren'];
                    console.log(searchString);
                    _.invoke(this.$library, searchString[0], this.isChecked);

                    this.$forceUpdate();
                }
            })


        }
    }

</script>

<style scoped lang="scss">
@import "@/styles/style.scss";
</style>
