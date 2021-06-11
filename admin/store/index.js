export const state = () => ({
  users: [],
  oneUser: {}
})

export const actions = {
  async nuxtServerInit({commit}){
    await this.$axios
        .get('http://api.users.ru/users')
        .then((result) => {
          commit('setUsers', result.data)
        })
  },

  SOCKET_newMessage(ctx, data) {
    console.log('message ', data);
  }
}

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  setOneUser(state, user) {
    state.oneUser = {}
    state.oneUser = user
  }
}

export const getters = {

}
