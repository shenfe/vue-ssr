<template>
  <div>
    <input type="text" v-focus :value="filterText" @input="updateFilterText">
    <Loading v-if="status == 0" />
    <ul v-else class="list">
      <li v-for="item in filterList" :key="item.id">
        <nuxt-link :to="{ name: 'index-list-id', params: { id: item.id }}">
          {{ item.id }}: {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
/* global ENV */

import { mapState, mapMutations } from 'vuex'

import axios from 'axios'

import { lifecycleLogger } from '~/client/mixins'

const mixinForTest = {
  ...lifecycleLogger()
}

export default {
  name: 'ListView',
  mixins: process.env.environment !== 'dev' ? [] : [mixinForTest],
  data () {
    return {
      list: [],
      status: 0
    }
  },
  asyncData (context) {
    return axios.get(process.env.apiBaseUrl + '/api/getList')
      .then(function (res) {
        return {
          list: res.data.data,
          status: 1
        }
      })
      .catch(function (err) {
        console.error(err)
      })
  },
  computed: {
    ...mapState({
      filterText: state => state.list.filterText
    }),
    filterList () {
      let t = this.filterText.trim()
      return this.list.filter(item => String(item.id).includes(t) || item.title.includes(t))
    }
  },
  methods: {
    updateFilterText (e) {
      this.$store.commit('list/filter', e.target.value)
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul.list {
  padding: 0 32px;
  list-style: none;
  li {
    text-align: left;
    line-height: 32px;
    a {
      display: block;
    }
    &.active a {
      color: lightseagreen;
    }
  }
}
input {
  width: 80%;
  height: 32px;
  margin: 8px;
  font-size: 16px;
  line-height: 32px;
  text-indent: 1em;
}
</style>
