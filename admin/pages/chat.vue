<template>
<div class="chat-wrp">
  <div class="chat">
    <!-- <Message
    v-for="(message, idx) of oneUser.messages" :key="idx"
    :oneUser='this.oneUser'
     /> -->
    <v-card class="mb-10" color="#385F73" width="600" dark v-for="(message, idx) of oneUser.messages" :key="idx">
      <v-card-subtitle>{{message}}</v-card-subtitle>
    </v-card>
  </div>
  <v-list>
    <v-list-item v-for="(m, idx) of messages" :key="idx">{{m}}</v-list-item>
  </v-list>
  <div class="chat-form">
  </div>
</div>
</template>
<script>
import {mapState} from 'vuex'
import Message from '@/components/Message'
export default {
  data: () => ({
    user: {},
  }),
  components:{
    Message
  },
  layout: 'default',
  computed: mapState(['oneUser', 'messages']),
  methods: {}
}
</script>
<style scoped>
.chat-wrp {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.chat {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  padding: 2rem;
  overflow-y: auto;
}

.chat-form {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 30rem;
  padding: 2rem;
  height: 100px;
  background: rgb(80, 80, 80);
}

</style>
