<template>
  <ul class="nav global-flex">
    <li v-for="item in links" :key="item.alias" :class="[{ active: current === item.alias }, 'cell']">
      <nuxt-link :to="{ name: item.alias }">{{ item.text }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    current: String,
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
ul.nav {
  height: 64px;
  li {
    line-height: 32px;
    padding: 16px 0 !important;
    a {
      display: block;
      border-right: 1px solid #ccc;
    }
    &.active a {
      color: lightseagreen;
    }
    &:last-of-type a {
      border-right: none;
    }
  }
}
</style>
