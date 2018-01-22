export const lifecycleLogger = function (...methods) {
  let arr = methods.length ? methods : ['beforeCreate', 'created',
    'beforeMount', 'mounted', 'beforeUpdate', 'updated',
    'beforeDestroy', 'destroyed']

  return arr.reduce((obj, p) => {
    obj[p] = function () {
      console.log(`[${this.$options.name}] [lifecycle] ${p}`)
    }
    return obj
  }, {})
}
