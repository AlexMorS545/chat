export const state = () => ({
  users: [],
  oneUser: {},
  messages: []
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
    ctx.commit('createMessage', data.text)
  }
}

export const mutations = {
  setUsers(state, users) {

    // users.forEach(user => {

    // })

    state.users = users

  },
  setOneUser(state, user) {
    state.oneUser = user
  },
  createMessage(state, message) {
    state.messages.push(message)
  }
}

export const getters = {

}
