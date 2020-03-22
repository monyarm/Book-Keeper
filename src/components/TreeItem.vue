<template>
   <li >
        <div
          :class="{bold: isFolder}">
          <input 
             @click="toggleRadio" type="checkbox" v-model="item.selected"/>
          <span @click="toggleOpen" >{{ name }}</span>
          <span @click="toggleOpen" v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        </div>
        <ul v-show="isOpen" v-if="isFolder">
          <TreeItem
            class="item"
            v-for="(chPath, index) in childPaths"
            ref="childItems"
            :key="index"
            :path="chPath"
          ></TreeItem>
        </ul>
      </li>
</template>

<script lang="ts">
import _ from 'lodash';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Library from '@/library';
import Book from '@/book';
import BookGroup from '@/bookgroup';


@Component
export default class TreeItem extends Vue {
    
    @Prop({default: ''}) path: string;

    
    @Prop({default: false}) isOpenProp: boolean; 
    isOpen: boolean = this.isOpenProp;

    get item(): Book | Library| BookGroup {
        if(this.path == '') {return this.$library};
        return _.get(this.$library, this.path);
    }

    get childPaths(): string[]| undefined {
        if (this.item instanceof BookGroup || this.item instanceof Library){
                if (this.item.children instanceof Array){
                    const tempArray: string[] = [];
                    for (let i = 0; i< this.item.children.length; i++){
                        tempArray.push(this.path + ((this.path == '') ? '' : '.') + 'children['+ i +']');
                    }
                    return tempArray;
                }
                else if( this.item.children instanceof Book || this.item.children instanceof BookGroup) {
                    return [this.path + '.children'];
                }
        }
        return;
    }


    get isFolder(): boolean {
        if (this.item instanceof BookGroup || this.item instanceof Library){
            return true;
        }
        return false;
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
        //console.log(this.childPaths);
        if (this.isFolder) {
            this.isOpen = !this.isOpen;
        }
    }


    toggleRadio(path = this.path): void {
            _.set(this.$library, path + '.selected', !this.item.selected);
            
            (this.$refs.childItems as TreeItem[] )?.forEach((x: TreeItem) => {
                x.toggleRadio();
                x.$forceUpdate();
            })
        }

    }

</script>

<style scoped lang="scss">
@import "@/styles/style.scss";
</style>
