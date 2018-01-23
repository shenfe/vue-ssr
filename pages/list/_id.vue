<template>
  <div style="padding: 0 32px">
    <Loading v-if="status == 0" />
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
/* global ENV */

import axios from 'axios'

import { lifecycleLogger } from '~/client/mixins'

export default {
  name: 'DetailView',
  mixins: process.env.environment !== 'dev' ? [] : [lifecycleLogger()],
  data () {
    return {
      status: 0,
      id: null,
      title: '',
      content: ''
    }
  },
  asyncData (context) {
    let id = context.params.id
    return axios.get(`/api/getDetail?id=${id}`)
      .then(function (res) {
        return {
          id,
          title: res.data.data.title,
          content: res.data.data.content,
          status: 1
        }
      })
      .catch(function (err) {
        console.error(err)
      })
  },
  methods: {
  }
}
</script>
