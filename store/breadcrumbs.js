export const state = () => ({
  breadcrumbs: [{ url: '/', text: 'Composite Computer Club' }],
})

export const getters = {
  breadcrumbs: (state) => state.breadcrumbs,
}

export const mutations = {
  setBreadcrumbs(state, { breadcrumbs }) {
    state.breadcrumbs = breadcrumbs
  },
}
