<!--
 * @Description: 
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2025-06-03 16:00:06
-->
<template>
  <div class="home">
    <Typewriter :content="content" is-markdown :md-plugins="mdPlugins" :highlight="highlight" />
  </div>
</template>

<script setup lang="ts">
import { Typewriter } from 'vue-element-plus-x'
import mk from 'markdown-it-mathjax3'
import hljs from 'highlight.js'
import type { MarkdownItPlugin } from 'vue-element-plus-x/types/Typewriter'

const highlight = (str: string, lang: string) => {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(str, { language: lang }).value
    } catch (_) {}
  }
  return '' // 使用默认转义
}

const content = ref('')

// md.use(mk)

const mdPlugins: MarkdownItPlugin[] = [md => mk(md, {})]

onMounted(async () => {
  // fetch('/test.txt').then(async res => {
  fetch('/mermaid.txt').then(async res => {
  // fetch('/mathjax.txt').then(async res => {
    const data = await res.text()
    content.value = data
  })
})
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  padding: 20px 10%;
}
</style>
