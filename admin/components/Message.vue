<template>
<div>
  <v-card class="mb-10" color="#385F73" width="600" dark >
    <v-card-subtitle>{{message}}</v-card-subtitle>
  </v-card>
  <v-list>
    <v-list-item v-for="(m, idx) of messages" :key="idx">{{m}}</v-list-item>
  </v-list>
</div>
</template>
<script>
export default {
  props: {
    oneUser: Object
  }
}
</script>
<style scoped>

</style>
