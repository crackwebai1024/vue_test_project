<template>
  <v-app-bar app color="blue-grey" darken-3>
    <v-spacer></v-spacer>
    <router-link to="/">
      <v-btn class="mr-2">
        <v-icon class="mr-1" color="white" size="medium">fas fa-home</v-icon>
        Home
      </v-btn>
    </router-link>
    <router-link to="/invoice">
      <v-btn>
        <v-icon class="mr-1" color="white" size="medium">fas fa-file</v-icon>
        Invoice
      </v-btn>
    </router-link>
  </v-app-bar>
</template>
<script>
export default {
  name: "AppBar",
};
</script>
<style scoped>
.v-btn {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
</style>
