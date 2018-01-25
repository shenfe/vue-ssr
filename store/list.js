export const state = () => ({
  filterText: ''
})

export const mutations = {
  filter (state, text) {
    state.filterText = text
  }
}
