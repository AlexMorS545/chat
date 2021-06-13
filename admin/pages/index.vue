<template>
    <v-card height="95vh" width="256">
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">Admin</v-list-item-title>
            <v-list-item-subtitle>Список чатов</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="u in users" :key="u.id" link @click="showChat(u.id)">
            <v-list-item-icon>{{ u.id }}</v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title >{{ u.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  layout: 'head',
  // data: () => ({
  //   arrUsers: []
  // }),
  sockets: {
    connect() {
      console.log('Client connect')
    }
  },
  methods: {
    ...mapMutations(['setOneUser']),
    showChat(id) {
      this.users.find(u => {
        if(u.id === id) {
          this.setOneUser(u)
          this.$router.push('/chat')
          this.$socket.client.emit('userJoined', u, data => {
            // this.setOneUser(u)
            // this.$router.push('/chat')
          })
        }
      });
    },
  },
  computed: {
    ...mapState(['users']),
    ...mapMutations(['setUsers'])
  }
    // this.users.forEach(u => {
    //   usersName.push(u.name)
    //   this.arrUsers = Array.from(new Set(usersName))
    // })

}
</script>
