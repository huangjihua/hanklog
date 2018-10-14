<template>
  <Layout ref="layout">
    <!-- <BuySellAds slot="page-bottom"/> -->
  </Layout>
</template>

<script>
import Layout from '@default-theme/Layout.vue'
// import BuySellAds from './BuySellAds.vue'

export default {
  components: {
    Layout
  },

  created () {
    const EVENTS = [
      'sw-ready',
      'sw-cached',
      'sw-updated',
      'sw-offline',
      'sw-error',
    ]
    EVENTS.forEach(name => {
      this.$on(name, (...args) => this.$refs.layout.$emit(name, ...args))
    })
  }
}
</script>
