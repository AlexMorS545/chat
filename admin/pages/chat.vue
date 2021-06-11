<template>
   <v-card
      color="#385F73"
      width="600"
      dark
    >
      <v-card-title class="text-h5">{{oneUser.name}}</v-card-title>

      <v-card-subtitle>{{oneUser.message}}</v-card-subtitle>
    </v-card>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data: () => ({
    user: {},
  }),
  layout: 'default',
  computed: mapState(['oneUser']),
  methods: {

  }
}
</script>
