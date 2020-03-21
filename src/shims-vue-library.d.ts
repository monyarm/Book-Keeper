import Vue from 'vue'
import Library from '@/library'

declare module 'vue/types/vue' {
  interface Vue {
    $library: Library
  }
}